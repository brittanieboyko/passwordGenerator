
function askUserForLength() {
    var passwordLength = prompt("How long do you want your password to be?", "8");

    if (passwordLength >= 8 && passwordLength <= 128) {
        console.log(passwordLength);
    }

    var specialChars = confirm("Do you want to include special characters in your password?");
    var lowercaseChars = confirm("Do you want to include lowercase characters in your password?");
    var uppercaseChars = confirm("Do you want to include uppercase characters in your password?");
}
