// Get string
//controller function
function getStringInput(){
    
    document.getElementById("alert").classList.add("invisible");
    
    let inputString = document.getElementById("inputString").value;
    
    let revInputString = reverseString(inputString);
    
    displayString(revInputString);


}
//Reverse string
//Logic function
function reverseString(inputString){

    let revString = [];

    //reverse a string using a for loop

    for (let index = inputString.length - 1; index >= 0; index--) {
        revString += inputString[index];
        
    }

    return revString;
    
}


//Display message/string
//View function
function displayString(revInputString){

//write message to he screen
    document.getElementById("msg").innerHTML = `Your reversed string is: ${revInputString}`;

//turn on alert box
    document.getElementById("alert").classList.remove("invisible");


}