import scala.annotation.tailrec
object Hamming {
  def distance(dnaStrandOne: String, dnaStrandTwo: String): Option[Int] =
    (dnaStrandOne.length == dnaStrandTwo.length) match {
      case true =>
        Some(dnaStrandOne zip dnaStrandTwo count (pair => pair._1 != pair._2))
      case false => None
    }

  def distanceRecursive(
      dnaStrandOne: String,
      dnaStrandTwo: String
  ): Option[Int] =
    (dnaStrandOne.length equals dnaStrandTwo.length) match {
      case true =>
        Some(calculateDistance(0, dnaStrandOne, dnaStrandTwo))
      case _ => None
    }

  @tailrec def calculateDistance(
      acc: Int,
      string1: String,
      string2: String
  ): Int = {
    string1.length match {
      case 0 => acc
      case _ => {
        calculateDistance(
          if (string1.head != string2.head) acc + 1 else acc,
          string1.tail,
          string2.tail
        )
      }
    }
  }
}
