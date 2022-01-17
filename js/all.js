const hasAuthenticated = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user == null || user == undefined) {
        return false
    }
    return user.isLoggedIn
}

if (hasAuthenticated) {
    let signinLink = document.querySelector('.signin-link')
    signinLink.href = "/pages/dashboard/view-articles.html"
    signinLink.innerHTML = "ADMIN"
}