import org.scalatest.funsuite.AnyFunSuite
import org.scalatest.matchers.should.Matchers


/** @version 1.1.0 */
class SpaceAgeTest extends AnyFunSuite with Matchers {

  test("age on Earth") {
    SpaceAge.onEarth(1000000000) should be (31.69 +- 0.01)
    SpaceAgeCurry.onEarth(1000000000) should be (31.69 +- 0.01)
    SpaceAgePartitionFunction.onEarth(1000000000) should be (31.69 +- 0.01)
    
  }

  test("age on Mercury") {
    SpaceAge.onMercury(2134835688) should be (280.88 +- 0.01)
    SpaceAgeCurry.onMercury(2134835688) should be (280.88 +- 0.01)
    SpaceAgePartitionFunction.onMercury(2134835688) should be (280.88 +- 0.01)
  }

  test("age on Venus") {
    SpaceAge.onVenus(189839836) should be (9.78 +- 0.01)
    SpaceAgeCurry.onVenus(189839836) should be (9.78 +- 0.01)
    SpaceAgePartitionFunction.onVenus(189839836) should be (9.78 +- 0.01)
  }

  test("age on Mars") {
    SpaceAge.onMars(2.329871239E9) should be (39.25 +- 0.01)
    SpaceAgeCurry.onMars(2.329871239E9) should be (39.25 +- 0.01)
    SpaceAgePartitionFunction.onMars(2.329871239E9) should be (39.25 +- 0.01)
  }

  test("age on Jupiter") {
    SpaceAge.onJupiter(901876382) should be (2.41 +- 0.01)
    SpaceAgeCurry.onJupiter(901876382) should be (2.41 +- 0.01)
    SpaceAgePartitionFunction.onJupiter(901876382) should be (2.41 +- 0.01)
  }

  test("age on Saturn") {
    SpaceAge.onSaturn(3.0E9) should be (3.23 +- 0.01)
    SpaceAgeCurry.onSaturn(3.0E9) should be (3.23 +- 0.01)
    SpaceAgePartitionFunction.onSaturn(3.0E9) should be (3.23 +- 0.01)
  }

  test("age on Uranus") {
    SpaceAge.onUranus(3.210123456E9) should be (1.21 +- 0.01)
    SpaceAgeCurry.onUranus(3.210123456E9) should be (1.21 +- 0.01)
    SpaceAgePartitionFunction.onUranus(3.210123456E9) should be (1.21 +- 0.01)
  }

  test("age on Neptune") {
    SpaceAge.onNeptune(8.210123456E9) should be (1.58 +- 0.01)
    SpaceAgeCurry.onNeptune(8.210123456E9) should be (1.58 +- 0.01)
    SpaceAgePartitionFunction.onNeptune(8.210123456E9) should be (1.58 +- 0.01)
  }
}