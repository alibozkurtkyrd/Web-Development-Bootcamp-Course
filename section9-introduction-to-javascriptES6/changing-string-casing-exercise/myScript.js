var name = prompt("Enter your name: ");
var firstCapital = name.slice(0,1);
var remainedCharacter = name.slice(1,name.lenght);
 
alert("Hello " + firstCapital.toUpperCase() + remainedCharacter.toLowerCase());

