export function decodedValue(inputs: string[]): number {
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
  
  return parseInt(Mapping[inputs[0]] + Mapping[inputs[1]]);
};