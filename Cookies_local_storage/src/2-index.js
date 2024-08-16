document.getElementById("loginForm").addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const name_val = document.getElementById("fname").value;
    const email_val = document.getElementById("email").value;
    setCookies(name_val, email_val);
}
function setCookies(name, email) {
    document.cookie = "name" + "=" + name + ";"
    document.cookie = "email" + "=" + email + ";"
    // console.log("Test cookie set:", document.cookie);
}
document.getElementById("showCookie").addEventListener('click', handleShow);
function handleShow() {
    const email = getCookie("email");
    const name = getCookie("name");
    document.getElementById("cookieContainer").innerHTML = `Email: ${email} - Firstname: ${name}`;
    console.log("handleShow is clicked:");
}


function getCookie(name) {
    const cookie = document.cookie;
    const cookieArray = cookie.split("; ");
    
    for (let i = 0; i < cookieArray.length; i++) {
        const [cookieName, cookieValue] = cookieArray[i].split("=");
        if (cookieName === name) {
            return cookieValue;
        }
    }
    
    return "";
}
