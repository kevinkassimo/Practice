//TODO: MY_SOL

function FirstFactorial(num) {
	var result = num;
	if (num === 1) {
		return result;
	} else {
		result *= FirstFactorial(num-1);
	}
	return result;
}

//TODO: BEST_SOL
function FirstFactorial(num) { 
  if( num === 1 ) { 
    return 1;       
  } 
  return num * FirstFactorial(num-1);   
}
  FirstFactorial();
