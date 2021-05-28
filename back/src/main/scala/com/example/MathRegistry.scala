package com.example

import akka.actor.typed.ActorRef
import akka.actor.typed.Behavior
import akka.actor.typed.scaladsl.Behaviors
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
