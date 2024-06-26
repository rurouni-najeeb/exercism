import scala.language.dynamics

object SpaceAge {
  def onEarth(age: Double): Double = age / 31557600

  def onVenus(age: Double): Double = onEarth(age) / 0.61519726

  def onMercury(age: Double): Double = onEarth(age) / 0.2408467

  def onMars(age: Double): Double = onEarth(age) / 1.8808158

  def onJupiter(age: Double): Double = onEarth(age) / 11.862615

  def onSaturn(age: Double): Double = onEarth(age) / 29.447498

  def onUranus(age: Double): Double = onEarth(age) / 84.016846

  def onNeptune(age: Double): Double = onEarth(age) / 164.79132
}

object SpaceAgeCurry {
  private val EARTH_SECONDS = 31_557_600.0
  private def calculate(orbitPeriod: Double) = (seconds: Double) =>
    seconds / EARTH_SECONDS / orbitPeriod

  val onVenus = calculate(0.61519726)
  val onEarth = calculate(1)
  val onMercury = calculate(0.2408467)
  val onMars = calculate(1.8808158)
  val onJupiter = calculate(11.862615)
  val onSaturn = calculate(29.447498)
  val onUranus = calculate(84.016846)
  val onNeptune = calculate(164.79132)
}

object SpaceAgePartitionFunction {
  private val EARTH_SECONDS = 31_557_600.0
  private def calculate(orbitPeriod: Double, seconds: Double) =
    seconds / EARTH_SECONDS / orbitPeriod

  val onVenus = calculate(0.61519726, _)
  val onEarth = calculate(1, _)
  val onMercury = calculate(0.2408467, _)
  val onMars = calculate(1.8808158, _)
  val onJupiter = calculate(11.862615, _)
  val onSaturn = calculate(29.447498, _)
  val onUranus = calculate(84.016846, _)
  val onNeptune = calculate(164.79132, _)
}

object SpaceAgeDynamic extends Dynamic {
  private val EARTH_SECONDS = 31_557_600.0
  private val orbitPeriod: Map[String, Double] = Map(
    "Venus" -> 0.61519726,
    "Earth" -> 1,
    "Mercury" -> 0.2408467,
    "Mars" -> 1.8808158,
    "Jupiter" -> 11.862615,
    "Saturn" -> 29.447498,
    "Uranus" -> 84.016846,
    "Neptune" -> 164.79132
  )
  private def calculate(planet: String, seconds: Double): Double =
    seconds / EARTH_SECONDS / orbitPeriod.getOrElse(planet, 1.0)

  def applyDynamic(methodCall: String)(seconds: Double): Double =
    calculate(methodCall.substring(2), seconds)
}
