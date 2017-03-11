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