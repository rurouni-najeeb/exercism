export class Robot {
  _name : string;
  static characters : string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  static numbers : string = "0123456789";
  static nameSet = new Set<string>();

  static prefixList = Robot.generateCombinations(Robot.characters, 2);
  static usedPrefix : string[] = [];

  static suffixList = Robot.generateCombinations(Robot.numbers, 3);
  static usedSuffix : string[] = [];

  constructor() {
    this._name = Robot.generateName(); 
  }

  static generateCombinations(feedString : string, length : number) :  string[]{

    if(length < 1)
      return [""];
    
    let combinations = Robot.generateCombinations(feedString, length - 1);
    let newCombinations : string[] = [];
    for(let i = 0; i < feedString.length; i++){
      combinations.forEach((element) => {
        newCombinations.push(feedString[i] + element);
      });
    };

    return newCombinations;
  }

  public static generateName() : string {
    let prefix : string = "";
    let suffix : string = "";
    let generatedString : string = "";

    if(Robot.prefixList.length > 0){
      let inx : number = Math.ceil(Math.random() * (Robot.prefixList.length - 1));
      prefix = Robot.prefixList[inx];
      Robot.prefixList.splice(inx);
      Robot.usedPrefix.push(prefix);
    }
    if(Robot.suffixList.length > 0){
      let inx : number = Math.ceil(Math.random() * (Robot.suffixList.length - 1));
      suffix = Robot.suffixList[inx];
      Robot.suffixList.splice(inx);
      Robot.usedPrefix.push(suffix);
    }

    if(prefix !== "" && suffix !== ""){
      generatedString = `${prefix}${suffix}`;
    }
    if(prefix === "" && suffix !== ""){
      while(generatedString !== "" && Robot.nameSet.has(generatedString)){
        let inx : number = Math.ceil(Math.random() * (Robot.usedPrefix.length - 1));
        generatedString = `${Robot.usedPrefix[inx]}${suffix}`;
      }
    }
    if(prefix !== "" && suffix === ""){
      while(generatedString !== "" && Robot.nameSet.has(generatedString)){
        let inx : number = Math.ceil(Math.random() * (Robot.usedSuffix.length - 1));
        generatedString = `${prefix}${Robot.usedSuffix[inx]}`;
      }
    }
    if(prefix === "" && suffix === ""){
      while(generatedString !== "" && Robot.nameSet.has(generatedString)){
        let prefixInx : number = Math.ceil(Math.random() * (Robot.usedPrefix.length - 1));
        let suffixInx : number = Math.ceil(Math.random() * (Robot.usedSuffix.length - 1))
        generatedString = `${Robot.usedPrefix[prefixInx]}${Robot.usedSuffix[suffixInx]}`;
      }
    }

    Robot.nameSet.add(generatedString);
    return generatedString;
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    this._name = Robot.generateName();
  }

  public static releaseNames(): void {
    Robot.nameSet = new Set<string>();
  }
}
