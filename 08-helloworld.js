
var Event1 = document.getElementById ("Button");
Event1.addEventListener ("click", myfirst, false);

function myfirst (){
    var userinput1 = document.getElementById ("box").value;
     var number1= parseInt(userinput1);
    if (number1 <0){
        document.getElementById("output").innerHTML = "The number you chose is below zero";
        }
   else if(number1 <10){
         document.getElementById("output").innerHTML = "The number you chose is less than 10";
        
    }
    else if (number1>10){
         document.getElementById("output").innerHTML = "The number you chose is superior then 10.";
    }
}
    


    //var userinput2 = document.getElementById ("box2").value;
    //var userinput3 = document.getElementById ("box3").value;
   
   
    //var number2= parseInt( userinput2);
    //var number3= parseInt( userinput3);
    //var result1= (number1+number2)*number3;
    //var result2 = number1 + number2 + number3;
    //var result3 = result1 - result2

    
    //var answer1=number1+1;
    //var answer2=number1-1;
    //document.getElementById("output").innerHTML = result3;
     
    
    //var answer = number1 + number2;
    //var answer =Math.max (number1, number2);
    //if (number1===number2){
        //document.getElementById("output").innerHTML = "equal";
    //}
    //else{
        //document.getElementById("output").innerHTML = "different";
    //document.getElementById("output").innerHTML = answer;


