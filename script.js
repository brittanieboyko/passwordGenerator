
function createPassword() {
    var passwordLength = prompt("How long do you want your password to be?", "8");
    var specialChars = confirm("Do you want to include special characters in your password?");
    var lowercaseChars = confirm("Do you want to include lowercase characters in your password?");
    var uppercaseChars = confirm("Do you want to include uppercase characters in your password?");

    if (passwordLength >= 8 && passwordLength <= 128) {
        var password = "";
        var allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

        for (var i = 0; i < passwordLength; i++) {
           password = password + allCharacters.charAt(Math.floor(Math.random() * passwordLength));
        }

        window.document.getElementById("textArea").innerHTML = password;
    };
};
 