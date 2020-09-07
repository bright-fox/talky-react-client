export const cacheUser = (user, accessToken) => {
    localStorage.setItem("isLoggedIn", true)
    localStorage.setItem("accessToken", accessToken)
    localStorage.setItem("currUser", JSON.stringify(user))
}

export const removeUser = () => {
    localStorage.setItem("isLoggedIn", false)
    localStorage.setItem("accessToken", null)
    localStorage.setItem("currUser", null)
}