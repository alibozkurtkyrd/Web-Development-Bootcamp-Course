function isLeap(year) {


 var result = "Leap year.";
    if (year % 4 === 0)
    {
        if (result % 100 === 0)
        {
            if(result % 400 === 0){
                result = "Leap year.";
            }

            else{
                result = "Not leap year.";
            }
        }

        else{
            result = "Leap year.";
        }
        
    }

    else{
        result = "Not leap year.";
    }

    return result;
    


}