// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// function named generatePassword
function generatePassword() {
    // create prompt that ask the input length between 8 and 128
    var numInput = prompt("Please enter your desired length password between 8 and 128 characters.")
    if (numInput < 8 || numInput > 128){
        alert("Please have password length between 8 and 128!!")
        var numInput = alert("Please enter valid length.")
        prompt("Please enter valid length")
    }
    // prompted that ask lowercase/uppercase
    var lowerCase = confirm("do you want lower case?")
    if (lowerCase === true){
        alert("you selected lower case")
    } else {
        alert("you have not selected lower case values")
    }

    // prompted that ask lowercase/uppercase
    var upperCase = confirm("do you want upper case?")
    if (upperCase === true){
        alert("you selected upper case")
    } else {
        alert("you have not selected upper case values")
    }
    // prompt confirming that has at least one type of character type
    if ((lowerCase && upperCase)!= true){
        alert("please select at least one case type")
    }
}

// create a password generated that matches the selected criteria
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
