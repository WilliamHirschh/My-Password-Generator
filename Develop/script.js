// Assignment code here
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var usersChoice;
var enter;
var selectNumber;
var selectUpper;
var selectLower;
var selectCharacter;
var enter;
var usersChoice;
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
  }
  else if (selectNumber && selectUpper && selectLower && selectCharacter) {
    usersChoice = character.concat(numbers, letters, letters2)

  }
  else if (selectNumber && selectUpper && selectCharacter) {
     usersChoice = character.concat(numbers, letters2)

    } 
    else if (selectNumber && selectLower && selectCharacter) {
      usersChoice = character.concat(numbers, letters)
    } 
    else if (selectCharacter && letterLower && letterUpper) {
      usersChoice = character.concat(letters, letters2);
    }
    else if (selectCharacter && selectLower && letterUpper) {
      usersChoice = character.concat(letters, letters2);
    }

    else if (selectCharacter && selectNumber) {
      usersChoice = characters.concat(numbers);

  } else if (selectCharacter && selectLower) {
    usersChoice = characters.concat(letters);

  } else if (selectCharacter && selectUpper) {
    usersChoice = characters.concat(letters2);
  }
  else if (selectLower && selectNumber) {
    usersChoice = letters.concat(numbers);

  } else if (selectLower && selectUpper) {
    usersChoice = letters.concat(letters2);

  } else if (selectNumber && selectUpper) {
    usersChoice = numbers.concat(letters2);
  }
  
  else if (selectCharacter) {
    usersChoice = selectCharacter;
  }
  else if (selectNumber) {
    usersChoice = selectNumber;
  }
  else if (selectLower) {
    usersChoice = letters;
  }
  else if (selectUpper) {
    usersChoice = space.concat(letters2);
  };
var pswrd = [];

for (var i = 0; i < enter; i++) {
  var pickedPassword = usersChoice[Math.floor(Math.random() * usersChoice.length)];
  pswrd.push(pickedPassword);
}

var passWord1 = pswrd.join("");
return passWord1;

}
writePassword()
console.log(writePassword())
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

