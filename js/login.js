const button = document.querySelector(".form-login-button")

button.addEventListener('click', checkPassword)

function checkPassword() {
    var correctPassword = [123]
    var password = document.querySelector(".forminput1").value


    if (password == correctPassword) {
        window.location = "personal.html"
    } else {
        alert("Access Denied!")
        return false
    }
}