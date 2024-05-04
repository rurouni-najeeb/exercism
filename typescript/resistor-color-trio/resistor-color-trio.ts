export function decodedResistorValue(inputs: string[]): string {
  type colors = {
    [color: string] : string;
  };

  let Mapping: colors = {
    black : "0",
    brown : "1",
    red   : "2",
    orange: "3",
    yellow: "4",
    green : "5",
    blue  : "6",
    violet: "7",
    grey  : "8",
    white : "9",
  }
  let num_zeros : number = Number(Mapping[inputs[2]]);
  let unit : string = "";
  
  let first_digit = Mapping[inputs[0]];
  let second_digit = Mapping[inputs[1]];

  if(second_digit === "0"){
    num_zeros += 1;
    second_digit = "";
  }

  if(num_zeros >= 3){
    unit = "kilo"
    num_zeros = Math.pow(10, num_zeros) / 10000;
  }
  
  return first_digit + second_digit + "0".repeat(num_zeros) + " " + unit + "ohms";
};