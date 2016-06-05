//TODO: MY_SOL
function LetterCapitalize(str) { 
    var words = str.split(" ");
    var list = [];
    words.forEach(function(word){
        var first = word[0];
        first = first.toUpperCase();
        list.push(first + word.substr(1, word.length));
    });

    var result = list.join(" ");
  // code goes here  
  return result; 
         
}
   
// keep this function call here 
LetterCapitalize(readline());

//TODO: BEST_SOL
function letterCapitalize(str) {
	var words = str.split(" ");
	for (var i = 0; i <words.length; i++) {
		var word = words[i].split("");
		word[0] = word[0].toUpperCase();
		words[i] = word.join(" ");
	}
	return words.join(" ");
};

console.log(letterCapitalize());
