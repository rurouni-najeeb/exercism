export function isPangram(sentence : string) : boolean{
  let bitString : number[] = new Array<number>(26).fill(0)
  for(let i = 0; i < sentence.length; i++){
    let chr : string = sentence.charAt(i);
    if((/[a-zA-Z]/).test(chr)){
      chr = chr.toLowerCase();
      bitString[chr.charCodeAt(0) - 97] = 1;
    }
  }

  if(bitString.includes(0))
    return false;
  else
    return true;
}
