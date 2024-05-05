object Leap {
  def leapYear(year: Int): Boolean =
    (year % 4) match {
      case 0 => (year % 100) match {
        case 0 => (year % 400) match {
          case 0 => true
          case _ => false
        }
        case _ => true 
      }
      case _ => false
    }
}
