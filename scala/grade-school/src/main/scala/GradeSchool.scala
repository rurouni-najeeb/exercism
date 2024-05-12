import scala.collection.immutable.SortedMap
class School {
  type DB = Map[Int, Seq[String]]
  private var _db = Map[Int, Seq[String]]()
  def add(name: String, g: Int) = {
    val roster = _db.getOrElse(g, Seq())
    _db = roster contains name match {
      case false => _db + (g -> (roster :+ name))
      case _ => {
        print(s"The roster already has $name inside grade $g")
        _db
      }
    }
  }

  def db: DB = _db

  def grade(g: Int): Seq[String] = db.getOrElse(g, Seq[String]())

  def sorted: DB = {
    val sortedDB = SortedMap(_db.toSeq: _*)
    sortedDB.view.mapValues(_.sorted).toMap
  }
}
