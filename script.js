
function askUserForLength() {
    var passwordLength = prompt("How long do you want your password to be?", "8");

    if (passwordLength >= 8 && passwordLength <= 128) {
        console.log(passwordLength);
    }
}
