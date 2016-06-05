//TODO: MY_SOL

function LetterChanges(str) { 
    var vowel = ['a', 'e', 'i', 'o', 'u'];
    var new_str = '';
    
    for (var i = 0; i < str.length; i++) {
        chr = str[i];
        if (chr.charCodeAt(0) >= 'a'.charCodeAt(0) && chr.charCodeAt(0) < 'z'.charCodeAt(0)) {
            chr = String.fromCharCode(chr.charCodeAt(0)+1);
        }
        if (chr.charCodeAt(0) == 'z'.charCodeAt(0)+1) {
            chr = 'a';
        }
        if (vowel.indexOf(chr) >= 0) {
            chr = chr.toUpperCase();
        }
        new_str += chr;
    }
  // code goes here  
  return new_str; 
         
}

//TODO: SECOND_ATTEMPT
function LetterChanges(str) { 
    var list = 'aeiou';
    var arr = str.split('');
    var new_str = '';

    arr.forEach(function(c) {
        if (c.charCodeAt() >= 'a'.charCodeAt() && c.charCodeAt() <= 'z'.charCodeAt()) {
            if (c !== 'z') {
                c = String.fromCharCode(c.charCodeAt()+1);
            } else {
                c = 'a';
            }
        }
        if (list.indexOf(c) >= 0) {
            c = c.toUpperCase();
        }
        new_str += c;
    })
  // code goes here  
  return new_str; 
         
}
   
// keep this function call here 
LetterChanges(readline());

//TODO: OFFICIAL_SOL
function LetterChanges(str) { 
  var vowels = "aeiou";
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var shifted = str.split("");
  var str = "";
  // code goes here  
  for(var i = 0; i < shifted.length; i++) {
    if (shifted[i] == "z"){
      str += "A";
    } else if (alpha.indexOf(shifted[i].toLowerCase()) != -1) {
      if (vowels.indexOf(alpha[alpha.indexOf(shifted[i].toLowerCase()) + 1]) != -1){
        str += alpha[alpha.indexOf(shifted[i].toLowerCase()) + 1].toUpperCase();
      } else {
        str += alpha[alpha.indexOf(shifted[i].toLowerCase()) + 1];
      } 
    } else {
      str += shifted[i];
    }
  }
  return str; 
         
}

//TODO: SHORTEST_SOL
function LetterCapitalize(str) {
  var words = str.split(" "); /* make string into array of words */
  for(var i = 0, y = words.length; i < y; i++){  /* for loop to loop through each word */
    var letters = words[i].split(""); /* make each word into an array of letters */
    letters[0] = letters[0].toUpperCase(); /* take the 1st in each letter array and capitalize it */
    words[i] = letters.join(""); /* each word equal the letter array joined to a single string */
  }
  return words.join(" ");  /* return the words array joined back to one string */
}


function LetterCapitalize(str) { 
  return str.replace(/\b[a-z]/g,function(c){return c.toUpperCase()});
}
