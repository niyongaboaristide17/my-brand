const hasAuthenticated = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user == null || user == undefined) {
        return false
    }
    return user.isLoggedIn
}
let signinLink = document.querySelector('.signin-link')
if (hasAuthenticated()) {

    signinLink.setAttribute('href', "/pages/dashboard/view-articles.html")
    signinLink.innerHTML = "ADMIN"
} else {
    signinLink.innerHTML = "SIGNIN"
}