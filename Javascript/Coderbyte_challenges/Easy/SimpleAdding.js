//TODO: MY_SOL
function SimpleAdding(num) { 

    var result = 0;
    for (var i = 1; i <= num; i++) {
        result += i;
    }
  // code goes here  
  return result; 
         
}
   
// keep this function call here 
SimpleAdding(readline());

//TODO: BEST_SOL
function SimpleAdding(num) { 
  if(num === 1){
   return 1; /* return 1 to get out of our function recursion below */
  }
  return num + SimpleAdding(num - 1); /* call our function - 1 until 1  */
}
