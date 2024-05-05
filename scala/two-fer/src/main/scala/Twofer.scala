object Twofer {
  def twofer(name: String = ""): String = name.isEmpty() match {
    case true => "One for you, one for me."
    case false => s"One for $name, one for me."
  }
}
