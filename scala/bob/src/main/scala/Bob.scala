object Bob {
  def response(statement: String): String = {
    statement.trim() match {
      case s if s.isBlank() => "Fine. Be that way!"
      case s if isQuestion(s) && isYelling(s) =>
        "Calm down, I know what I'm doing!"
      case s if isQuestion(s) => "Sure."
      case s if isYelling(s)  => "Whoa, chill out!"
      case _                  => "Whatever."
    }
  }

  def isQuestion(statement: String): Boolean = statement.endsWith("?")
  def isYelling(statement: String): Boolean = {
    val statementWithOnlyAlphabets = statement.replaceAll("[^a-zA-Z]", "")
    !statementWithOnlyAlphabets
      .isBlank() && (statementWithOnlyAlphabets
      .toUpperCase() == statementWithOnlyAlphabets)
  }
}
