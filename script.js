var charSetLower = "abcdefghijklmnopqrstuvwxyz";
var charSetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charSetNumbers = "0123456789";
var charSetSpecial = "!\"#$%&'()*+,-./:;<=>?@[";

function createPassword() {
    var passwordLength = prompt("How long do you want your password to be?", "8");

    if (passwordLength < 8 || passwordLength > 128) {

        alert("You must enter a password length between 8 and 128 characters");

    } else {
        var lowercaseCharPrompt = confirm("Would you like to include lowercase characters in your password?");
        var uppercaseCharPrompt = confirm("Would you like to include uppercase characters in your password?");
        var numbersCharPrompt = confirm("Would you like to include numbers characters in your password?");
        var specialCharPrompt = confirm("Would you like to include special characters in your password?");

        var password = "";
        var charSet = "";
        
        if (lowercaseCharPrompt === true) {
            charSet = charSet + charSetLower;
        }
        if (uppercaseCharPrompt === true) {
            charSet = charSet + charSetUpper;
        }
        if (numbersCharPrompt === true) {
            charSet = charSet + charSetNumbers;
        }
        if (specialCharPrompt === true) {
            charSet = charSet + charSetSpecial;
        }

        for (var i = 0; i < passwordLength; i++) {
            password = password + charSet.charAt(Math.floor(Math.random() * passwordLength));
        }

        window.document.getElementById("textArea").innerHTML = password;
    }
};
 