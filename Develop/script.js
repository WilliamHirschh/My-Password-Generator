// Assignment code here
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var usersChoice
var enter;
var selectNumber;
var selectUpper;
var selectLower;
var selectCharacter;
let passwordDisplay = document.getElementById("password")
var lettersToUpperCase = function (x) {
  return x.toUpperCase();
}
letters2 = letters.map(lettersToUpperCase);
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function () {
passWord1 = writePassword();
document.getElementById("password").placeholder = passWord1;
});
// Write password to the #password input
function writePassword() {
  enter = parseInt(prompt("Select a number between 8-128!"));
  
  if (!enter) {
    alert("You need to select a value");
  } else if (enter < 8 || enter > 128) {
   enter = parseInt(prompt("Please chose between 8 and 128 characters"));
  } else {
    selectNumber = confirm("Would you like numbers?");
    selectUpper = confirm("Would you like upper case letters?");
    selectLower = confirm("Would you like lowercase numbers?");
    selectCharacter = confirm("Would you like special characters?");
  };
  

  if (!selectNumber && !selectUpper && !selectLower && !selectCharacter) {
    usersChoice = alert("Please choose one of the options");

  } else if (selectNumber && selectUpper && selectLower && selectCharacter);
    { usersChoice = character.concat(numbers, letters, letters2)

  } else if (selectNumber && selectUpper && selectCharacter)
    { usersChoice = character.concat(numbers, letters); 
    } else if (selectNumber && selectLower && selectCharacter) {
      usersChoice = character.concat(numbers, letters2)
    }







  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
