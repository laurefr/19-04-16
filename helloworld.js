//create a variable for an event.
var Event1 = document.getElementById ("Button");
// add an eventlistener for the event to work
Event1.addEventListener ("click", myfirst, false);
// Create a function for the eventlistener to work
function myfirst (){
    //create a variable to get the user input in the text box
    var userinput1 = document.getElementById ("box").value;
    //Do not forget to insert it to HTML
    document.getElementById("output").innerHTML = userinput1;
}