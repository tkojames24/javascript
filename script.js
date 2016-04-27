var a = prompt("Enter a temp in Fhrenheit");
var b;
b = Math.round((a - 32) * 5/9);

if(isNaN(b)){
	alert("Pease but in a number.");
}else{

alert('Your temp in celisus is ' + b );


}