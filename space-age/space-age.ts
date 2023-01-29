export function age(planet: string, seconds: number): number {
  type earthYears = {
    [planet : string] : number;
  };

  const earthYearMap : earthYears = {
    'mercury': 0.2408467,
    'venus': 0.61519726,
    'earth': 1.0,
    'mars': 1.8808158,
    'jupiter': 11.862615,
    'saturn': 29.447498,
    'uranus': 84.016846,
    'neptune': 164.79132,
  };

  let ageOnEarth : number = seconds / (60 * 60 * 24 * 365.25);
  return Number((ageOnEarth / earthYearMap[planet]).toFixed(2)); 
}
