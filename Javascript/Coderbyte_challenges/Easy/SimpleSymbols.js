//TODO: MY_SOL
function SimpleSymbols(str) {
	str = '=' + str + '=';
	var list = str.split('+');
	var all = str.match(/[A-Za-z]/g).length;
	var num = 0;
	list.forEach(function(part) {
		if (part != undefined && part != null && part.length != 0) {
			if (isalpha(part[0])) {
				console.log(part)
				if (part.length != 1) {
					return false;
				}
				num++;
			}
		}
	});
	if (all !== num) {
		return false;
	}
	return true;
}

function isalpha(chr) {
	if (chr.length !== 1) {
		return false;
	}
	if (chr.match(/[A-Za-z]/)) { //This is Okay because match will return null if not found, instead of an empty object.
		return true;
	} else {
		return false;
	}
}

//TODO: BEST_SOL
function simpleSymbols(str){
  return str.match(/\+[a-z]\+/gi).length === str.match(/[a-z]/gi).length;
}
