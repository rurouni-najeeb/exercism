export class Rational {
  _numerator : number;
  _denominator : number;
  constructor(numerator : number, denominator : number) {
    this._numerator = numerator;
    
    if(denominator === 0)
      throw new Error("Denominator cannot be zero")
    
    this._denominator = denominator;

    // Transfer the minus to numerator
    if(this._denominator < 0){
      this._denominator = Math.abs(this._denominator);
      this._numerator *= (-1);
    }
  }

  // Getter definition
  get numerator() : number {
    return this._numerator;
  }
  get denominator() : number {
    return this._denominator;
  }

  add(other : Rational) : Rational{
    let denominator : number = this._denominator * other.denominator
    let numerator : number = this._numerator * other.denominator + other.numerator * this._denominator;
    return new Rational(numerator, denominator).reduce();
  }

  sub(other : Rational) : Rational {
    let denominator : number = this._denominator * other.denominator
    let numerator : number = this._numerator * other.denominator - other.numerator * this._denominator;
    return new Rational(numerator, denominator).reduce();
  }

  mul(other : Rational) : Rational {
    let denominator : number = this._denominator * other.denominator
    let numerator : number = this._numerator * other.numerator;
    return new Rational(numerator, denominator).reduce();
  }

  div(other : Rational) : Rational {
    return this.mul(other.inverse())
  }

  abs() : Rational{
    return new Rational(Math.abs(this._numerator), Math.abs(this._denominator));
  }

  exprational(exponent : number) : Rational {
    let denominator : number = Math.pow(this._denominator, exponent);
    let numerator : number = Math.pow(this._numerator, exponent);
    return new Rational(numerator, denominator).reduce();
  }

  expreal(x : number) : number {
    return Math.pow(Math.pow(x, 1 / this._denominator), this._numerator);
  }

  inverse() : Rational {
    return new Rational(this._denominator, this._numerator);
  }

  reduce() {
    let gcd : number = Rational.getGCD(this);
    return new Rational(
      this._numerator / gcd,
      this._denominator / gcd
    );
  }

  private static getGCD(rational : Rational) : number{
    rational = rational.abs()
    let p : number = Math.min(rational._numerator, rational._denominator);
    let q : number = Math.max(rational._numerator, rational._denominator);
    
    if (p == 0)
      return q;
    
    while(q % p !== 0){
      p = q % p;
      q = p;
    }

    return p;

  }
}
