function probOne(){
	var divBy1 = parseInt(document.getElementById('div1').value);
	var divBy2 = parseInt(document.getElementById('div2').value);
	var range = parseInt(document.getElementById('range').value);
	var sum = 0;
	for (var i = 0; i < range; i++){
		if(i % divBy1 === 0 || i % divBy2 === 0){
			sum += i;
		}
	} 
	// sum = divBy + range;

	document.getElementById('answer').value = sum;
}
// function q1Calc(){
// 		var no = parseInt(document.getElementById('q1').value);
// 		var sum = 0;
// 		for (var i = 1; i< no; i++)
// 		{
// 			if ( i % 3 === 0 || i%5 === 0)
// 			{
// 				sum = sum + i;
// 			}
// 		}
// 		document.getElementById('a1').value = sum;
// }























