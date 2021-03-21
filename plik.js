function checkPassword() {
    const smallLetters = /[a-z]/g;
    const bigLetters = /[A-Z]/g;
    const specialCharacters = /[!@#$%^&*)(+=._-]/g

    const message1 = "Min. 1 mała litera";
    const message2 = "Min. 1 duża litera ";
    const message3 = "Min. 1 znak specjalny";
    const message4 = "Min. 8 znaków";

    const passwordValue = document.getElementById("password").value;
    const passwordError = document.getElementById("passwordError");
    passwordError.innerHTML = "";
    
    if (!smallLetters.test(passwordValue)) {
        addErrorMessage(passwordError, message1);
    }
    if (!bigLetters.test(passwordValue)) {
        addErrorMessage(passwordError, message2);
    }
    if (!specialCharacters.test(passwordValue)) {
        addErrorMessage(passwordError, message3);
    }
    if (passwordValue.length < 8) {
        addErrorMessage(passwordError, message4);
    }
    if (passwordValue.length === 0) {
        passwordError.innerHTML = "";
    }
    checkIfPasswordIsTheSame();
}

function addErrorMessage(passwordError, message) {
    return passwordError.innerHTML += "<p>" + message + "</p>";
}

function checkIfPasswordIsTheSame() {
    const passwordValue = document.getElementById("password").value;
    const repeatedPasswordValue = document.getElementById("repeatedPassword").value;
    const repeatedPasswordError = document.getElementById("repeatedPasswordError");
    const missMatchError = "Hasła różnią się od siebie!"

    if (repeatedPasswordValue === passwordValue) {
        repeatedPasswordError.innerHTML = "";
    } else {
        repeatedPasswordError.innerHTML = missMatchError;
    }
}