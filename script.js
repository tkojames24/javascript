
//Get the input from user
var a = prompt("Enter a temp in Fahrenheit");
//Make the input a variable 
var b;
//convert the number to C and round whole numbers
b = Math.round((a - 32) * 5/9);
//check if input is numbrr
if(isNaN(b)){
// if not number alert
	alert("Pease but in a number.");
}else{
// If is a number give answer 
alert('Your temp in celisus is ' + b );


}