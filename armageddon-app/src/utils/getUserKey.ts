//установка пользовательского API-Key
export const getUserKey = () => {
    let userKey = "";
    try {
        userKey = localStorage.getItem("API_KEY");
    }
    catch (err) {
        userKey = "DEMO_KEY";
    }
    if (!userKey) {
        userKey = "DEMO_KEY";
    }
    return userKey;
}