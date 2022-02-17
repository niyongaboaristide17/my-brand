const hasAuthenticated = () => {
    const token = JSON.parse(localStorage.getItem("AccessToken"))
    if (token == null || token == undefined) {
        return false
    }
    return true
}

if (!hasAuthenticated()) {
    window.location.replace('/pages/signin.html')
}

const logout = () => {
    localStorage.removeItem('AccessToken')
    return true
}