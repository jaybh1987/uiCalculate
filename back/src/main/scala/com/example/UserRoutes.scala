package com.example

import akka.Done
import akka.actor.typed.scaladsl.AskPattern._
import akka.actor.typed.{ActorRef, ActorSystem}
import akka.http.scaladsl.model.{ContentTypes, HttpEntity, StatusCodes}
import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server.Route
import akka.util.Timeout
import ch.megard.akka.http.cors.scaladsl.CorsDirectives._
import ch.megard.akka.http.cors.scaladsl.settings.CorsSettings

import com.example.UserRegistry._

import scala.concurrent.Future

//#import-json-formats
//#user-routes-class
class UserRoutes(userRegistry: ActorRef[UserRegistry.Command])(implicit val system: ActorSystem[_]) {

  //#user-routes-class
  import JsonFormats._
  import akka.http.scaladsl.marshallers.sprayjson.SprayJsonSupport._
  //#import-json-formats
  implicit val executionContext = system.executionContext
  // If ask takes more time than this to complete the request is failed
  private implicit val timeout = Timeout.create(system.settings.config.getDuration("my-app.routes.ask-timeout"))

  def getUsers(): Future[Users] =
    userRegistry.ask(GetUsers)
  def getUser(name: String): Future[GetUserResponse] =
    userRegistry.ask(GetUser(name, _))
  def createUser(user: User): Future[ActionPerformed] =
    userRegistry.ask(CreateUser(user, _))
  def deleteUser(name: String): Future[ActionPerformed] =
    userRegistry.ask(DeleteUser(name, _))

  def fetchItem(itemId: Long):Future[Option[Item]] = Future {
    UserRegistry.orders.find( o => o.id == itemId)
  }

  def saveOrder(order: Order): Future[Done] = {
    orders = order match{
      case Order(items) => items ::: orders
      case _ => orders
    }
    Future { Done }
  }

  def calculating(t: TimeInput): Future[String]= Future {

    implicit val f: Option[Double] => Double = x => x.getOrElse(0d)

    if(t.speed.isEmpty && t.time.isEmpty && t.distance.isEmpty) {
      "Please fill atlest two fields."
    } else {
      if(t.speed.isEmpty) {
        val speed = t.distance.getOrElse(0d) / t.time.getOrElse(0d)
        s"your speed should be  $speed if you have covered ${t.distance} kilometers in ${t.time} hours."
      } else if(t.distance.isEmpty) {
        val distance = t.speed.getOrElse(0d) * t.time.getOrElse(0d)
        s"You can cover $distance km when you speed is ${t.speed} and time taken is ${t.time}"
      } else {
        val time = t.distance.getOrElse(0d) / t.speed.getOrElse(0d)
        s"It will take $time hours to cover distance of ${t.distance} km when your speed is ${t.speed}"
      }
    }
  }


  //what is 10 % of 100
  def amountCalculated(percent: Double, amount: Double): Future[String] = Future(s"${amount * percent/100}")

  //10 is what percentage of 4
  def whatPercentOf(amt1: Double, amt2: Double): Future[String] = Future(s"${(amt1/amt2) * 100}")

  //10 is 50% of what
  def xIsYpercentOfWhat(x: Double, y: Double): Future[String] = Future( s"${(x/ y) * 100}")



//  def saveOrder(order: Order): Future[Option[Item]]

  val s = CorsSettings.defaultSettings.withAllowGenericHttpRequests(true)


  val userRoutes: Route = cors() {
      concat(
        path("hello") {
          get{
            complete(HttpEntity(ContentTypes.`text/html(UTF-8)`, "Say hello to akka-http"))
          }
        },
        get{
          pathPrefix("item" / LongNumber) {
            id =>
              println(s"get item method executed.")
              val maybeIteam :Future[Option[Item]] = fetchItem(id)
              onSuccess(maybeIteam) {
                case Some(item) => complete(item)
                case None => complete(StatusCodes.NotFound)
              }
          }
        },
        get {
          path("percent" / DoubleNumber / DoubleNumber) {
            (amt1, amt2)  =>
              println("percetn method executed.")

              val maybeAns: Future[String] = amountCalculated(amt1, amt2)

              onSuccess(maybeAns) {
                case d: String => complete(d)
                case _ => complete(StatusCodes.NotFound)
              }
          }
        },
        post {
          path("create-order") {
            println(s"post request executed. items = ${orders}")
            entity(as[Order]) {
              order =>
                val saved: Future[Done] = saveOrder(order)
                onSuccess(saved){
                  _ =>
                    complete("order created.")
                }
            }
          }
        },
        post{
          path("calculate") {
            entity(as[TimeInput]) {
              t =>
                val mayBeAns: Future[String] = calculating(t)
                onSuccess(mayBeAns) {
                  case d: String => complete(d)
                  case _ => complete(StatusCodes.NotFound)
                }
            }
          }
        }
      )
    }


//  def f(x: Int): String = {
//    def loop(n: Int, nList: List[Int]): List[Int] = if(n == 0) nList else loop(n / 2, nList ++ (if(n % 2 == 0) List(0) else List(1)))
//    loop(x, Nil).reverse.mkString("")
//  }
  //#all-routes
}
