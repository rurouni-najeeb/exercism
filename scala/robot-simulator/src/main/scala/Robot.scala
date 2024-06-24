object Bearing extends Enumeration {
  type Bearing = Value
  val North, East, West, South = Value
}

trait Turn {
  val bearing: Bearing.Bearing
  val coordinates: (Int, Int)
}

class LeftTurn(curBearing: Bearing.Bearing, curPos: (Int, Int)) extends Turn {
  override val bearing: Bearing.Bearing = curBearing match {
    case Bearing.North => Bearing.West
    case Bearing.East  => Bearing.North
    case Bearing.South => Bearing.East
    case Bearing.West  => Bearing.South
  }
  override val coordinates: (Int, Int) = curPos
}

class RightTurn(curBearing: Bearing.Bearing, curPos: (Int, Int)) extends Turn {
  override val bearing: Bearing.Bearing = curBearing match {
    case Bearing.North => Bearing.East
    case Bearing.East  => Bearing.South
    case Bearing.South => Bearing.West
    case Bearing.West  => Bearing.North
  }
  override val coordinates: (Int, Int) = curPos
}

class Advance(curBearing: Bearing.Bearing, curPos: (Int, Int)) extends Turn {
  override val bearing: Bearing.Bearing = curBearing
  override val coordinates: (Int, Int) = curBearing match {
    case Bearing.North => (curPos._1, curPos._2 + 1)
    case Bearing.East  => (curPos._1 + 1, curPos._2)
    case Bearing.South => (curPos._1, curPos._2 - 1)
    case Bearing.West  => (curPos._1 - 1, curPos._2)
  }
}
case class Robot(direction: Bearing.Bearing, initPos: (Int, Int)) {
  var curPos = initPos
  var curBearing = direction
  val turnRight = new RightTurn(curBearing, curPos)
  val turnLeft = new LeftTurn(curBearing, curPos)
  val advance = new Advance(curBearing, curPos)
  def simulate(instructions: String): Robot =
    RobotSimulator.simulate(this, instructions)
}
