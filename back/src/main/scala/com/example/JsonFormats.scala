package com.example

import com.example.UserRegistry.ActionPerformed

//#json-formats
import spray.json.DefaultJsonProtocol

object JsonFormats  {
  // import the default encoders for primitive types (Int, String, Lists etc)
  import DefaultJsonProtocol._

  implicit val userJsonFormat = jsonFormat3(User)
  implicit val usersJsonFormat = jsonFormat1(Users)
  implicit val itemJsonFormat = jsonFormat2(Item)
  implicit val orderFormat = jsonFormat1(Order)
  implicit val timeInputJsonFormat = jsonFormat3(TimeInput)
  //final case class TimeInput(speed: Option[Double], distance: Option[Double], time: Option[Double])

  implicit val actionPerformedJsonFormat = jsonFormat1(ActionPerformed)
}
//#json-formats
