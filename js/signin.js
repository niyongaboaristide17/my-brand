function checkEmail() {
    const val = document.getElementById("email-login").value;
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(val)
}

function checkPassword() {
    // at least one number, one lowercase and one uppercase letter
    // at least six characters
    const val = document.getElementById('password-login').value;
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    return re.test(val);
}

const myCredentials = () => {
    localStorage.setItem("user", JSON.stringify({
        name: 'NIYONGABO Aristide',
        email: 'niyongaboaristide17@gmail.com',
        password: '@Password123',
        isLoggedIn: false
    }))
}

myCredentials()


function loginSubmit() {

    if (checkEmail() == false && checkPassword() == false) {
        document.getElementById("email-error").innerHTML = "Invalid email"
        document.getElementById("password-error").innerHTML = "Invalid password"
        return false
    } else if (checkEmail() == false) {
        document.getElementById("email-error").innerHTML = "Invalid email"
        return false
    } else if (checkPassword() == false) {
        document.getElementById("password-error").innerHTML = "Invalid password"
        return false
    }



    const user = JSON.parse(localStorage.getItem("user"))
    const email = document.getElementById("email-login").value;
    const password = document.getElementById('password-login').value;

    console.log(user.email);

    if (user.email === email && user.password === password) {
        localStorage.setItem("user", JSON.stringify({
            name: 'NIYONGABO Aristide',
            email: 'niyongaboaristide17@gmail.com',
            password: '@Password123',
            isLoggedIn: true
        }))
        window.location.href = "/pages/dashboard/view-articles.html"
    } else {
        return false
    }

}

// const loginForm = document.querySelector('.login-form')
// loginForm.addEventListener('submit', () => {
//     console.log('Login work');
// })