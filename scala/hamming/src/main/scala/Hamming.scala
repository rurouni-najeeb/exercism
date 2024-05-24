object Hamming {
  def distance(dnaStrandOne: String, dnaStrandTwo: String): Option[Int] =
    (dnaStrandOne.length == dnaStrandTwo.length) match {
      case true =>
        Some(dnaStrandOne zip dnaStrandTwo count (pair => pair._1 != pair._2))
      case false => None
    }
}
