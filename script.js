var weight = parseInt(prompt('please enter your weight'))
        var height = parseFloat(prompt('please enter your height'))
        function bmiAdvanced(weight, height){
            var bmi = weight /(height * height);
            var bmiRound = Math.round(bmi); 
            var output;
        if(bmiRound < 18.5) {
            var output = `Your BMI is ${bmiRound} so you are underweight.`;
            }else if(bmiRound >= 18.5 && 24.9){
            var output = `Your BMI is ${bmiRound}, so you have a normal weight.`;
            }else if(bmiRound > 24.9 ) 
            var output = `Your BMI is ${bmiRound}, so you are overweight`;
            //return output;
            alert(output);
        }
        bmiAdvanced(65, 1.8)