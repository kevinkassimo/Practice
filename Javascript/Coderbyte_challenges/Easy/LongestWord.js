//TODO: MY_SOL

function LongestWord(sen) {
  sen = sen.replace(/[^a-zA-Z ]/g, "");
	var list = sen.split(" ");
	var lword = '';
	var len = 0;
	list.forEach(function(word){
		if (word.length > len) {
			lword = word;
			len = lword.length;
		}
	})
	return lword;
}

//TODO: BEST_SOL
function LongestWord(sen) {
    var sentence = sen.split(" ").sort(function(a, b) {
        return b.replace(/[^a-zA-Z]/g, "").length - a.replace(/[^a-zA-Z]/g, "").length;
    });
  return sentence.shift();
}

//Another
function LongestWord(sen) {

  var regExp = /\W/gi;
    sen = sen.replace(regExp, " ").split(" ");
    var array = [];
    var i = 0;
    while (i < sen.length) {
       array.push(sen[i].length);
       i++;
    }
    array.sort(function(a,b) {return a-b});
    var longest = array.pop();

    var j = 0;
    while (j <= array.length) {

        if(sen[j].length == longest) {
           return sen[j];
        }
        j++;
    }

}
