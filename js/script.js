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






















