package com.example
import java.lang.management.{ManagementFactory, OperatingSystemMXBean}
object OsHelper {


  val osHolder = ManagementFactory.getOperatingSystemMXBean.asInstanceOf[OperatingSystemMXBean]

  osHolder.getSystemLoadAverage
}
