const hasAuthenticated = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    return user.isLoggedIn
}

if (!hasAuthenticated()) {
    window.location.replace('/pages/signin.html')
}

const logout = () => {
    localStorage.setItem("user", JSON.stringify({
        email: 'niyongaboaristide17@gmail.com',
        password: '@Password123',
        isLoggedIn: false
    }))
    return true
}