function fibonacciGenerator (n) {

 
    var array = [];
    if(n == 0 || n == 1)
    {
        array.push(0);
    }
 
 
    else if (n == 2)
    {
        array = [0,1];
    }
 
 
    else{
        array = [0,1];
        
        while(n != array.length)
        {
            
              array.push(array[array.length-1] + array[array.length-2]);     
        }
    }
    
    
    return array;
    
    
}