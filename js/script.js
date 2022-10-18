function getPassword() {
    var char = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%*()_+?><:{}[]";

    var passwordLength = 16;
    var password = '';

    for (let i = 0; i < passwordLength; i++) {
        var randomPassword = Math.floor(Math.random() * char.length);
        password += char.substring(randomPassword, randomPassword + 1);
    }

    document.getElementById('password').value = password;
}

