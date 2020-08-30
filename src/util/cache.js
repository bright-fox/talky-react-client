export const cacheUser = (user, accessToken) => {
    localStorage.setItem("loggedIn", true)
    localStorage.setItem("accessToken", accessToken)
    localStorage.setItem("currUser", JSON.stringify(user))
}