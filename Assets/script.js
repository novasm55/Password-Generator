// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//User Inputs
var length;
var includeLowercase;
var includeUppercase;
var includeSpecialChars;
var includeNumbers;

// Function to generate a random password
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSpecialChars) {


if ( 8 < length < 128){
    length = parseInt(prompt("Select password character length between 8 and 128"));
  }

  if (!length){
    alert("This needs a value");
  }
  else {
    includeLowercase = confirm ("Include lowerCase characters?");
    includeUppercase = confirm("Include upperCase character?");
    includeSpecialChars = confirm("Include specialChars?")
    includeNumbers = confirm("Include numbers?")
  }

  let passwordCharSet = "";
  if (includeLowercase) passwordCharSet += "abcdefghijklmnopqrstuvwxyz";
  if (includeUppercase) passwordCharSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeNumbers) passwordCharSet += "0123456789";
  if (includeSpecialChars) passwordCharSet += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  
  var password = ""
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * passwordCharSet.length);
    password += passwordCharSet[randomIndex];
  }
  return password;
}

