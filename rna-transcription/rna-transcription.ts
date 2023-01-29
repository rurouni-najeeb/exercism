export function toRna(dnaString : string) : string | Error {
  type rnaMap = {
    [nucleotide : string] : string;
  }

  const transcriptionMap : rnaMap = {
    'A': 'U', 
    'C': 'G', 
    'G': 'C', 
    'T': 'A'
  };

  let rnaString : string = ""
  for(let i = 0; i < dnaString.length; i++) {
    if(dnaString[i] in transcriptionMap)
      rnaString = rnaString.concat(transcriptionMap[dnaString[i]]);
    else
      throw new Error("Invalid input DNA.")
  }

  return rnaString;
};