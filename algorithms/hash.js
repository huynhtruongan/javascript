let arr = [2,5,5,2,3,5,1,2,4];
function hash(arr){
    let myObj = {};
   for(let i = 0; i< arr.length;i++){
       if(myObj[arr[i]]!==undefined){
           return arr[i];
           
       }else{
           myObj[arr[i]]=i;
           //myObj[arr[i]=true]
       }   
   }

} //O(n)
console.log(hash(arr));
// i j   i j+1
//j j+1  j j+2

function hash2(input) {
    for (let i = 0; i < input.length; i++) {
      for (let j = i + 1; j < input.length; j++) {
          let t = i+1;
        if(input[i] === input[j]) {
          return input[i];
        }else if(input[t]===input[j+1]){
            return input[t];
        }
      }
    }
    return undefined
}//O(n^2)
console.log(hash2(arr));