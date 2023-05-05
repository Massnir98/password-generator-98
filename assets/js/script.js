// Assignment 3

var generateBtn = document.querySelector('#generate');

// Write password to the #password input

function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector('#password');
passwordText.value = password;
}

// Generate password 
function generatePassword() {
var length = parseInt(prompt("How long do you want your password? (Choose between 8 and 128)"));

// Input is a number between 8 and 50
if (isNaN(length) || length < 8 || length > 128) {
alert("Please choose a valid number between 8 and 128.");
return "";
}

var uppercase = confirm("Would you like to include lowercase letters?");
var lowercase = confirm("Would you like to include uppercase letters?");
var numbers = confirm("Would you like to include numbers?");
var specialChars = confirm("Would you like to include special characters?");

// At least one special character must be selected
if (!uppercase && !lowercase && !numbers && !specialChars) {
alert("Please select at least one character type.");
return "";
}

var password = "";
var charSet = "";

// Add character types to character set
if (uppercase) {
charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}

if (lowercase) {
charSet += "abcdefghijklmnopqrstuvwxyz";
}

if (numbers) {
charSet += "0123456789";
}

if (specialChars) {
charSet += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
}

// Generate random password 
for (var i = 0; i < length; i++) {
password += charSet.charAt(Math.floor(Math.random() * charSet.length));
}

return password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Hover
generateBtn.addEventListener('mouseover', function() {
this.style.color = 'white';
});

generateBtn.addEventListener('mouseout', function() {
this.style.color = '#4c4c4c';
});