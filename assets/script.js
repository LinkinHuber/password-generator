var generateBtn = document.querySelector("#generate");
var passwordLength 
var characters = [];

//Variables for all of the possible characters that you can have in your password
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "$", "%", "&", "@", "?", "*", "#", "%", "(", ")", "+", "-", "=", ",", ".", "/", ":", ";", "<", ">", "[", "]", "^", "_", "{", "}"];

//Function that runs through the prompts one by one to see what criteria you want included in your password. The first one determines how many characters you want it to be and the rest determine which character classes will be included  
function passwordCriteria() { 

  passwordLength = parseInt(prompt("How long should the password be?\nSelect a value between 8 and 128"));
    if (passwordLength < 8 || passwordLength > 128) //if you put in a number less than 8 or greater than 128 your response will be invalid
    return alert("Please Try Again");
//as you go through the prompts it only includes that character class if the answer is true and combines it with the other true reponses (concat) as yop go down the list. Otherwise, if false it doesnt include that character class in your password
  includeLowercase = confirm("Do you want to include lowercase letters?")
    if (includeLowercase === true) characters = characters.concat(lowercase); 
  
  includeUppercase = confirm("Do you want to include uppercase letters?") 
    if (includeUppercase === true) characters = characters.concat(uppercase);
    
  includeNumeric = confirm("Do you want to include numeric characters?") 
    if (includeNumeric === true) characters = characters.concat(numeric);
    
  includeSpecialCharacters = confirm("Lastly, do you want to include special characters?") 
    if (includeSpecialCharacters === true) characters = characters.concat(specialCharacters);      
}

//This function generates the password by throwing all of the selected criteria into a random generator that generates a passoword specific to the amount of characters you want and the desired types of characters... it then returns the password
function generatePassword() {

 var password = "";

 for(var i = 0; i <passwordLength; i++){
   var randomIndex = Math.floor(Math.random() * characters.length); //Random generator right here 
   password += characters[randomIndex];
 }
 return password;
}

//This function takes the generated password and writes it out in the box on the page
function writePassword() {
  var rightCriteria = generatePassword();
  var passwordText = document.querySelector("#password");

  if (rightCriteria) {
    var yourPassword = generatePassword();
    passwordText.value = yourPassword;
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