export const cacheUser = (user, accessToken) => {
    localStorage.setItem("isLoggedIn", true)
    localStorage.setItem("accessToken", accessToken)
    localStorage.setItem("currUser", JSON.stringify(user))
}