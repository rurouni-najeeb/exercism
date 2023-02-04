import { generateKey } from "crypto";

export class Robot {
  _name : string;
  static nameSet : string[];

  constructor() {
    let generatedName : string = Robot.generateName();
    while(Robot.nameSet.includes(generatedName))
      generatedName = Robot.generateName();
    
    this._name = generatedName; 
  }

  public static generateName() : string {
    let characters : string = "ABCDEFGHIJKLMNOPQRSTUVWX";
    let inx1 : number = Math.ceil(Math.random() * 26) + 1;
    let inx2 : number = Math.ceil(Math.random() * 26) + 1;
    let alpha_part : string = characters[inx1] + characters[inx2];
    let integer_part : number = Math.ceil(Math.random() * 10000);
    return `${alpha_part}${integer_part}`
  }
  public get name(): string {
    return this._name
  }

  public resetName(): void {
    throw new Error('Implement Robot#resetName')
  }

  public static releaseNames(): void {
    throw new Error('Implement Robot.releaseNames')
  }
}
