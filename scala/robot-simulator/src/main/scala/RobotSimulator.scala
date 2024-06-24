object RobotSimulator {
  def simulate(robot: Robot, instructions: String): Robot = {
    for (instruction <- instructions) {
      val turn = instruction match {
        case 'L' => robot.turnLeft
        case 'R' => robot.turnRight
        case 'A' => robot.advance
      }
      robot.curBearing = turn.bearing
      robot.curPos = turn.coordinates
      println(
        "Instruction: " + instruction + " Current Bearing: " + robot.curBearing + " Current Position: " + robot.curPos
      )
    }
    robot
  }
}
