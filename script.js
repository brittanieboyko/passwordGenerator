var generatePasswordEl = document.querySelector("#genPasswordButton");
var textAreaEl = document.querySelector("#textArea");
var copyToClipEl = document.querySelector("#copyToClipButton");
var passwordLength = 0;
var charSetString = "";

function getPasswordLength() {
    passwordLength = prompt("Enter a password length", "8");
    validatePasswordPrompt(passwordLength);
};

function validatePasswordPrompt(length){
    if (length <= 128 && length >= 8 && length % 1 === 0) {
        determineCharacterSet();
    } else if (isNaN(length)) {
        alert("Please enter a valid number");
    } else {
        alert("Please enter a whole number from 8 to 128");
   }
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
        [specialCharPrompt, "!\"#$%&'()*+,-./:;<=>?@["]
    ];

    charSets.forEach(function (charSet) {
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
        charSetString = "";
    }
};

function createPassword() {
    password = "";

    for (var i = 0; i < passwordLength; i++) {
        password = password + charSetString.charAt(Math.floor(Math.random() * charSetString.length));
    }
    textAreaEl.innerHTML = password;
};

function copyPassword() {
    textAreaEl.select();
    textAreaEl.setSelectionRange(0, 99999)
    document.execCommand("copy");
};

generatePasswordEl.addEventListener("click", getPasswordLength);
copyToClipEl.addEventListener("click", copyPassword);
