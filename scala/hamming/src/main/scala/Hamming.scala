object Hamming {
  def calculateDistance(first: String, second: String): Int = {
    var score = 0
    for {
      i <- 0 to (first.length - 1)
    } {
      if (first.charAt(i) != second.charAt(i))
        score += 1
    }
    score
  }
  def distance(dnaStrandOne: String, dnaStrandTwo: String): Option[Int] =
    (dnaStrandOne.length == dnaStrandTwo.length) match {
      case true  => Some(calculateDistance(dnaStrandOne, dnaStrandTwo))
      case false => None
    }
}
