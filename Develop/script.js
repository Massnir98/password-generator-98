// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var length = parseInt(prompt("How many characters would you like? (Choose between 8 and 20."))
return "";

// Input is a number between 8 and 20
if (isNaN(length) || length < 8 || length >20) 
{ alert("Please choose a valid number between 8 and 20.");
return "";
}

var lowercase = confirm("Would you like to include lowercase letter to your password?")

var uppercase = confirm("Would you like to include uppercaseletter to your password?")

var specialChars = confirm("Would you like to include any special character to your password?");

var numbers = confirm("Would you like to include numbers to your password?")
