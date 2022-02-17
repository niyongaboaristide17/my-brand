const hasAuthenticated = () => {
    const token = JSON.parse(localStorage.getItem("AccessToken"))
    if (token == null || token == undefined) {
        return false
    }
    return true
}

let signinLink = document.querySelector('.signin-link')

if (hasAuthenticated()) {

    signinLink.setAttribute('href', "/pages/dashboard/view-articles.html")
    signinLink.innerHTML = "ADMIN"
} else {
    signinLink.innerHTML = "SIGNIN"
}