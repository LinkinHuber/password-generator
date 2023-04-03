var generateBtn = document.querySelector("#generate");

//Variables used in the generatePassword function
var passwordLength 
var characters = [];

//Variables for all of the possible characters that you can have in your password
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "$", "%", "&", "@", "?", "*", "#", "%", "(", ")", "+", "-", "=", ",", ".", "/", ":", ";", "<", ">", "[", "]", "^", "_", "{", "}"];

//Variables for passwordCriteria function
var includeLowercase
var includeUppercase
var includeNumeric
var includeSpecialCharacters

//Criteria questions to see how you want to create your password
function passwordCriteria() {
  passwordLength = parseInt(prompt("How long should the password be?\nSelect a value between 8 and 128"));
  includeLowercase = confirm("Do you want to include lowercase letters?");
    characters = characters.concat(lowercase);
  includeUppercase = confirm("Do you want to include uppercase letters?");
    characters = characters.concat(uppercase);
  includeNumeric = confirm("Do you want to include numeric characters?");
    characters = characters.concat(numeric);
  includeSpecialCharacters = confirm("Lastly, do you want to include special characters?");
    characters = characters.concat(specialCharacters);
}

//This function generates the password by throwing all of the selected criteria into a random generator that generates a passowrd specific to the amount of characters you want and the desired types of characters.
function generatePassword() {

 var password = "";

 for(var i = 0; i <passwordLength; i++){
   var randomIndex = Math.floor(Math.random() * characters.length); //Random generator right here 
   password = password + characters[randomIndex];
 }
 return password;
}

//This function takes the password from #password imput and writes it out
function writePassword() {
  var rightCriteria = generatePassword();
  var passwordText = document.querySelector("#password");

  if (rightCriteria) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }

}

//Listens for the "generate" button to be pressed 
generateBtn.addEventListener("click", writePassword);

//Calls all of the functions to make them carry out their tasks
passwordCriteria()
generatePassword()
writePassword()