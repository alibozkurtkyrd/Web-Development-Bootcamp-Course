var array = [];
 
function fizzBuzz()
{
    var count = array.length + 1;
 
    if (count % 3 == 0 && count %5 != 0)
    {
        array.push("Fizz");
    }
 
    else if (count % 5 == 0 && count %3 != 0)
    {
        array.push("Buzz");
    }
 
    else if (count % 3 == 0 && count %5 == 0)
    {
        array.push("FizzBuzz");
    }
 
    else{
        array.push(count);
    }
 
    count++;
 
    return array;
}
