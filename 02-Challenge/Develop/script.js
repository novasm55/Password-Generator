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
  length = parseInt(prompt("Choose character length of passowrd between 8 and 100"));
  if (!length){
    alert("This needs a value");
  }
  else if (length < 8 || length > 100){
    length = parseInt(prompt("You must choose between 8 and 100"));
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

// Example usage
var password = generatePassword(10, true, true, true, true); // Generate a 10-character password with all character types included
console.log(password); // Output the generated password to the console
