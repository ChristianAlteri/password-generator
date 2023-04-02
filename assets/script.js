// creating arrays full of our criteria. We have all lower case, upper case, special characters and numbers. We will append this arrays to an empty array that we will then make our password from.

const specialCharacters = ["!", "@", "#", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "~", "[", "]", "|", "{", "{", "}", ":", ";"];
const lowercaseCharacters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
const uppercaseCharacters = ['Q', "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
const numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let generateBtn = document.querySelector("#generate");

function generatePassword(){

  // check if button works
  console.log("user clicked the button");


// 1. prompt the user for the password criteria
  // a. password length between 8-128
  // b. ask for upper case, special characters and symbols
  
// define an empty array in which we will add all our possible usable characters based on what our user has input
  let passwordChoices = []
 
// write a prompt that stores a passwordLength variable that we will later use as our max length for a password
// write a prompt that only accepts numeric input between 8 and 128
  const passwordLength = prompt("Pick a password length between 8 and 128")
  if (passwordLength < 8 || passwordLength > 128) {
    return prompt("You must select a number between 8 and 128"), generatePassword()
  } 

  // use the confirm prompt(Which if selected returns True) to store the arrays you made at the top of the code as usable characters
  // 2. validate the user input by exploiting boolean values
  const isNumber = confirm('Do you want to include numbers?');
  if (isNumber) { Array.prototype.push.apply(passwordChoices, numberCharacters) };
  const isUpper = confirm('Do you want uppercase characters?');
  if (isUpper) { Array.prototype.push.apply(passwordChoices, uppercaseCharacters) };
  const isLower = confirm('Do you want lowercase characters?');
  if (isLower) { Array.prototype.push.apply(passwordChoices, lowercaseCharacters) };
  const isSpecial = confirm('Do you want to include special characters?');
  if (isSpecial) { Array.prototype.push.apply(passwordChoices, specialCharacters) };

  // Check if item 1. is complete. prompts work if the users chosen variables are stored correctly into one big array
  console.log(passwordChoices);

  // check if user has actually inputed something by checking if passwordChoices is empty. if so return, with a msg, and send user back to  generatePassword()
  if (passwordChoices.length === 0) {
    return prompt("You must select at least one of the criteria"), generatePassword()
  }

// 3. generate password based on criteria
// create an empty array which we will store our random password, as an array, that we will later convert to a string
const randomPassword = []

// for loop that loops until the users desired length and pushes random characters into the variable randomPassword
for (let i = 0; i < passwordLength; i++) {
  // utilise function method Math.floor to convert the Math.randoms random int into a whole number, then multiply that by the number of passwordChoices
  const randomChar = passwordChoices[Math.floor(Math.random() * passwordChoices.length)];
  randomPassword.push(randomChar);
}

// clg to check if a random array has been outputed
console.log(randomPassword);

// converts array to string
return randomPassword.join("");

}

// 4. return password
// this function passes generatePassowrd to password and writes password to HTML element with id #password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}

generateBtn.addEventListener("click", writePassword);