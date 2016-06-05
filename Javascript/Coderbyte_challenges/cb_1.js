//TODO: MY_SOL

function FirstReverse(str) { 
  // code goes here
  var new_str = '';
  for (var i = 0; i < str.length; i++) {
      new_str += str[str.length-1-i];
  }
  return new_str; 
}
// keep this function call here 
FirstReverse(readline());   

//TODO: BEST_SOL
function FirstReverse(str) { 

  // first we split the string which creates an array of characters, e.g. ['c','a','t']
  // then we call the reverse function on this array 
  // and finally we turn the reversed array back into a string using the join function
  return str.split('').reverse().join('');
         
}
   
FirstReverse("I am a string that needs to be reversed");   
