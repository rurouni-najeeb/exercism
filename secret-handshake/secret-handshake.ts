export function commands(handshake : number) {
  type map_type = {
    [binary : string] : string
  }

  const handshake_map : map_type = {
    "1" : "wink",
    "10" : "double blink",
    "100" : "close your eyes",
    "1000" : "jump",
  }

  let result : string[] = []
  let bytes : string[] = handshake.toString(2).split('');
  let ptr : number = bytes.length - 1;

  while(ptr >= 0){
    if(bytes[ptr] == "1"){
      let substr : string = bytes.slice(ptr, bytes.length).join('');
      if(substr === "10000")
        result.reverse()
      else
        result.push(handshake_map[substr]);
      
      bytes[ptr] = "0"
    }
    ptr--;
  }

  return result;
}
