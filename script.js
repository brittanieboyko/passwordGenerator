var generatePasswordEl = document.querySelector(".genPasswordButton");
var passwordLength;
var charSetString;


function getPasswordLength() {
    passwordLength = prompt("How long do you want your password to be?", "8");

    if (passwordLength < 8 || passwordLength > 128) {

        alert("You must enter a password length between 8 and 128 characters");

    } else {
        determineCharacterSet();
    };
};

function determineCharacterSet() {
    var lowercaseCharPrompt = confirm("Would you like to include lowercase characters in your password?");
    var uppercaseCharPrompt = confirm("Would you like to include uppercase characters in your password?");
    var numbersCharPrompt = confirm("Would you like to include numbers characters in your password?");
    var specialCharPrompt = confirm("Would you like to include special characters in your password?");
    
    var charSets = [
        [lowercaseCharPrompt, "abcdefghijklmnopqrstuvwxyz"],
        [uppercaseCharPrompt, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
        [numbersCharPrompt, "0123456789"],
        [specialCharPrompt, "!\"#$%&'()*+,-./:;<=>?@["],
    ]
    
    
    charSets.forEach(function(charSet) {
        if (charSet[0] === true) {
            charSetString = charSetString + charSet[1];
        }
    });
    validateUserSelection();
};

function validateUserSelection() {
    if (charSetString.length === 0) {
        alert("Please make at least one selection to generate a password");
    } else {
        createPassword(charSetString);
    }    
};

function createPassword() {
    password = "";

    for (var i = 0; i <= passwordLength; i++) {
        password = password + charSetString.charAt(Math.floor(Math.random() * passwordLength));

    }
    window.document.getElementById("textArea").innerHTML = password;

}

generatePasswordEl.addEventListener("click", getPasswordLength);
