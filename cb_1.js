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
