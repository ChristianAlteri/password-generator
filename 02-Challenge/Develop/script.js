// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


  // ask user to enter pw length

  // ask if want symbols

  // ask if want lowercase
  // ask if want uppercase
  // ask if want number


  // generate pw based on criteria selected


  // insert pw to textarea





}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);