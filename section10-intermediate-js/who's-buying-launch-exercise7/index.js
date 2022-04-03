function whosPaying(names) {
        
        var randomNumber = Math.random();
    randomNumber = randomNumber * names.length;
    randomNumber = Math.floor(randomNumber);

    var string = "";
    string =names[randomNumber] + " is going to buy lunch today!";
    return string;
    
   
}