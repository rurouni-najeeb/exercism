object Bob {
  def response(statement: String): String = {
    val trimmedStatement = statement.trim()

    if (trimmedStatement.isEmpty()) return "Fine. Be that way!"

    val isQuestion: Boolean = trimmedStatement.endsWith("?")
    val isYelling: Boolean = trimmedStatement.exists(
      _.isLetter
    ) && trimmedStatement.toUpperCase() == statement

    (isYelling, isQuestion) match {
      case (true, true) => "Calm down, I know what I'm doing!"
      case (_, true)    => "Sure."
      case (true, _)    => "Whoa, chill out!"
      case _            => "Whatever."
    }
  }
}
