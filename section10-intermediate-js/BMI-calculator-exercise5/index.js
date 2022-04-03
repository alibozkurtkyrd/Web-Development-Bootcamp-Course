function bmiCalculator (weight, height) {
    var bmi = weight/(height*height);
    bmi = Math.round(bmi);
    var interpretation = ""; // empty string is defined
    if (bmi <= 18.5)
    {
        interpretation =("Your BMI is " + bmi +", so you are underweight.");
    }
    
    else if (bmi <= 24.9)
    {
        interpretation ="Your BMI is " + bmi + ", so you have a normal weight.";
    }
    
    else{
        interpretation ="Your BMI is " + bmi +", so you are overweight.";
    }
    return interpretation;
}