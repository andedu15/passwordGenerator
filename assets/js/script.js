// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {

  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var number = "0123456789";
  var special = "!@#$%^&*()_+.;:?<>"
  var basePassword = "";
  var generatePassword = "";
  var passwordContent = "";

  /* PASSWORD LENGTH */
  passwordLength = +prompt("Choose a length of at least 8 characters and no more than 128 characters");
  while (passwordLength < 8 || passwordLength > 128 || passwordLength == null || passwordLength == "" || isNaN(passwordLength)) {
    passwordLength = +prompt("the number must be between 8 and a128. Choose a length of at least 8 characters and no more than 128 characters");
  }
  alert("Your password will be "+passwordLength+" characters");
  passwordContent += "Lenght: "+passwordLength+"\n"

  /* LOWERCASE CHOICE */
  lowerCaseChoice = prompt("Do you want to include LOWERCASE characters?\n Yes: write Y\n No: write N").toLocaleLowerCase();
  console.log(lowerCaseChoice);
  while (lowerCaseChoice != "y" && lowerCaseChoice != "n") {
    lowerCaseChoice = prompt("Write Y or N Do you want to include LOWERCASE characters? Write Y or N").toLocaleLowerCase();
  }
  
  if (lowerCaseChoice == "y") {
    basePassword += lowerCase;
    passwordContent += "LOWERCASE: YES\n"
    alert("Your password includes LOWERCASE");
  } else {
    passwordContent += "LOWERCASE: NO\n"
    alert("Your password doesn't include LOWERCASE");
  }

  /* UPPERCASE CHOICE */
  upperCaseChoice = prompt("Do you want to include UPPERCASE characters?\n Yes: write Y\n No: write N").toLocaleLowerCase();
  while (upperCaseChoice != "y" && upperCaseChoice != "n") {
    upperCaseChoice = prompt("Write Y or N Do you want to include UPPERCASE characters? Write Y or N").toLocaleLowerCase();
  }
  if (upperCaseChoice == "y") {
    basePassword += upperCase;
    passwordContent += "UPPERCASE: YES\n"
    alert("Your password includes UPPERCASE");
  } else {
    passwordContent += "UPPERCASE: NO\n"
    alert("Your password doesn't include UPPERCASE");
  }

  /* NUMBER CHOICE */
  numberChoice = prompt("Do you want to include NUMBERS characters?\n Yes: write Y\n No: write N").toLocaleLowerCase();
  while (numberChoice != "y" && numberChoice != "n") {
    numberChoice = prompt("Write Y or N Do you want to include NUMBERS characters? Write Y or N").toLocaleLowerCase();
  }
  if (numberChoice == "y") {
    basePassword += number;
    passwordContent += "NUMBERS: YES\n"
    alert("Your password includes NUMBERS");
  } else {
    passwordContent += "NUMBERS: NO\n"
    alert("Your password doesn't include NUMBERS");
  }

  /* SPECIAL CHOICE */
  specialChoice = prompt("Do you want to include SPECIAL characters?\n Yes: write Y\n No: write N").toLocaleLowerCase();
  while (specialChoice != "y" && specialChoice != "n") {
    specialChoice = prompt("Write Y or N Do you want to include SPECIAL characters? Write Y or N").toLocaleLowerCase();
  }
  if (specialChoice == "y") {
    basePassword += special;
    passwordContent += "SPECIAL CHARACTERS: YES\n"
    alert("Your password includes SPECIAL CHARACTERS");
  } else {
    passwordContent += "SPECIAL CHARACTERS: NO\n"
    alert("Your password doesn't include SPECIAL CHARACTERS");
  }

  /* ADD RANDOM */
  for (var x = 0; x < passwordLength; x++) {
    var random = Math.floor(Math.random() * basePassword.length);
    generatePassword += basePassword.charAt(random);
  }

  alert(passwordContent);

  return generatePassword;



}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
