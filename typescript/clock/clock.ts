export class Clock {
  _hour : number;
  _minute : number;

  constructor(hour: number, minute?: number) {
    this._hour = Clock.round(hour, 24)
    
    if(typeof minute !== 'undefined'){
      this._minute = Clock.round(minute, 60);
      this._hour = Clock.round(this._hour + Math.floor(minute / 60), 24);
    }
    else
      this._minute = 0
  }

  private static round(item : number, mod: number){
    return (mod + (item % mod)) % mod;
  }
  public toString(): string {
    const hour : string = Clock.convertToString(this._hour);
    const minute : string = Clock.convertToString(this._minute);
    return `${hour}:${minute}`;
  }

  private static convertToString(item : number) : string{
    if(item < 10)
      return `0${item}`;
    else
      return String(item);
  }
  public plus(minutes: number): Clock {
    return new Clock(this._hour, this._minute + minutes);
  }

  public minus(minutes: number): Clock {
    return new Clock(this._hour, this._minute - minutes)
  }

  public equals(other: Clock): boolean {
    if(this._hour === other._hour && this._minute === other._minute)
      return true;
    
    return false;
  }
}
