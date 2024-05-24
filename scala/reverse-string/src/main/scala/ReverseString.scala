object ReverseString {
  def reverse(str: String): String = {
    (for (i <- 0 to str.length - 1)
      yield (str.charAt(str.length - i - 1))).mkString
  }
}
