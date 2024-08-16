document.getElementById("loginForm").addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const name_val = document.getElementById("fname").value;
    const email_val = document.getElementById("email").value;
    setCookies(name_val, email_val);
}
function setCookies(name, email) {
    const d =  new Date();
    d.setTime(d.getTime() + (10 * 24 * 60 * 60 * 1000));
    document.cookie = `firstname=${name}; email=${email}expires=${d.toUTCString()}`;
    // console.log("Test cookie set:", document.cookie);
}
document.getElementById("showCookie").addEventListener('click', handleShow);
function handleShow() {
    document.getElementById("cookieContainer").innerHTML = document.cookie;
    console.log("handleShow is clicked:",);
}