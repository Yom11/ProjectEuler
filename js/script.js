function probOne(){
	var divBy1 = parseInt(document.getElementById('div1').value);
	var divBy2 = parseInt(document.getElementById('div2').value);
	var range = parseInt(document.getElementById('range').value);
	var regex = /^[0-9\.]+$/;
	var sum = 0;

	for (var i = 0; i < range; i++){
		if(i % divBy1 === 0 || i % divBy2 === 0){
			sum += i;
		}
	} 

    if(regex.test(divBy1) && regex.test(divBy2) && regex.test(range)){
        // return true;
    }
    else {
        alert("Please enter a number only. Strings is not allowed!");
        return false;
    }

	document.getElementById('answer').value = sum;
}




function probTwo(){
var a = 1;
var b = 1;
var sum = 0;
var regex = /^[0-9\.]+$/;
var limit = parseInt(document.getElementById('from').value);

for(var i=1; a < limit && b < limit; i = a + b){
  a = b;
  b = i;
  if(a % 2 === 0){
    sum += a;
  }
  document.getElementById('answer2').value = sum;
  }
    if(regex.test(limit)){
        // return true;
    }
    else {
        alert("Please enter a number only. Strings is not allowed!");
        return false;
    }
}




function probThree(){

var number = parseInt(document.getElementById('num').value);

for (var denominator = 2; number >= denominator; denominator++) { 
		  if(number % denominator === 0){
		    var c = number /= denominator;
		  }
	   }
        var answer = denominator-1;	
        document.getElementById('answer3').value = answer;
}
















