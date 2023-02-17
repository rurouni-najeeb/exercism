export function find(haystack: number[], needle: number): number | never {
  let left : number = 0;
  let right : number = haystack.length - 1;
  let res : number = binarySearch(haystack, left, right, needle);
  if(res === -1)
    throw new Error("Value not in array");
  else
    return res;
}

const binarySearch = (
  haystack: number[], 
  left : number, 
  right: number, 
  needle: number
  ) : number => {
    while(right >= left){
      let mid : number = Math.floor((right - left) / 2 + left);
      console.log(`Left: ${left} | Mid: ${mid} | Right: ${right}`)
      if(haystack[mid] === needle)
        return mid;
      if(haystack[mid] > needle)
        right = mid - 1;
      else
        left = mid + 1;
    }
    return -1;
}
