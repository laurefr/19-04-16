//create a variable for an event.
var Event1 = document.getElementById ("Button");

// add an eventlistener for the event to work
Event1.addEventListener ("click", myfirst, false);
// Create a function for the eventlistener to work
function myfirst (){
    //create a variable to get the user input in the text box
    var userinput1 = document.getElementById ("box").value;
    var userinput2 = document.getElementById ("box2").value;
    var userinput3 = document.getElementById ("box3").value;
    //parseInt is use for number. Need to create new variable as number not as string.
    var number1= parseInt( userinput1);
    var number2= parseInt( userinput2);
    var number3= parseInt( userinput3);
    var result1= (number1+number2)*number3;
    var result2 = number1 + number2 + number3;
    var result3 = result1 - result2

    
    // To increase a number create a new variable by using and old one and adding +1
    //var answer1=number1+1;
     // To decrease a number create a new variable by using and old one and adding -1
    //var answer2=number1-1;
    
    //To see the 2 answer write a string + the name of the variable and another string+ the name of the second variable.
    document.getElementById("output").innerHTML = result3;
     
    
    //var answer = number1 + number2;
    // Math.max will shox the higher number that the user put.
    //var answer =Math.max (number1, number2);
    //if (number1===number2){
        //document.getElementById("output").innerHTML = "equal";
    //}
    //else{
        //document.getElementById("output").innerHTML = "different";
        
    //}
    

    //Do not forget to insert it to HTML
    //document.getElementById("output").innerHTML = answer;
}

