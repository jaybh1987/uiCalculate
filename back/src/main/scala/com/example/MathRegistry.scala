package com.example

import akka.actor.typed.ActorRef
import akka.actor.typed.Behavior
import akka.actor.typed.scaladsl.{Behaviors, LoggerOps}

import scala.collection.immutable


//refere this linke for formulas.
//https://www.calculatorsoup.com/calculators/math/percentage.php
final case class Ppercent(percent: Double, amount: Double)
final case class WhatPercent(amount1: Double, amount2: Double)
final case class WhatAmount(amount: Double, percent: Double)


object MathRegistry {

  sealed trait Command
  final case class DoPpercent()

}

//object HelloWorld {
//
//  final case class Greet(whom: String, replyTo: ActorRef[Greeted])
//  final case class Greeted(whom: String, from: ActorRef[Greet])
//
//  def apply(): Behavior[Greet] = Behaviors.receive {
//    (context, message) =>
//
//      context.log.info("hello {}", message.whom)
//
//      message.replyTo ! Greeted(message.whom, context.self)
//      Behaviors.same
//  }
//}
//
//object HelloWorldBot{
//
//  def apply(max: Int): Behavior[HelloWorld.Greeted] = ???
//
//  private def bot(greetingCounter: Int, max: Int): Behavior[HelloWorld.Greeted] = Behaviors.receive{
//    (context, message) =>
//      val n = greetingCounter + 1
//      context.log.info2("Greeting {} for {} ", n, message.whom)
//
//      if(n == max) {
//        Behaviors.stopped
//      } else {
//        message.from ! HelloWorld.Greet(message.whom, context.self)
//        bot(n, max)
//      }
//  }
//}
//
//object HelloWorldMain {
//
//  final case class SayHello(name: String)
//
//  def apply(): Behavior[SayHello] = Behaviors.receive{
//    (context, message) =>
//
//      val greeter = context.spawn(HelloWorld(), "greeter")
//
//      Behaviors.receiveMessage{
//        message =>
//          val replyTo = context.spawn(HelloWorldBot(3), message.name)
//
//          greeter ! HelloWorld.Greet(message.name, replyTo)
//
//          Behaviors.same
//      }
//  }
//}