document.getElementById("loginForm").addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const name_val = document.getElementById("fname").value;
  const email_val = document.getElementById("email").value;
  setCookies(name_val, email_val);
  hideForm();
  showWelcomeMessageOrForm();
}

function setCookies(name, email) {
  const daysToExpire = 10;
  const date = new Date();
  date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  const path = "path=/";

  document.cookie = "name=" + name + ";" + expires + ";" + path;
  document.cookie = "email=" + email + ";" + expires + ";" + path;
}

function getCookie(name) {
  const nameEQ = name + "=";
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length, cookie.length);
    }
  }
  return "";
}

function showForm() {
  const welcomeMessage = document.getElementById("welcomeMessage");
  if (welcomeMessage) {
    welcomeMessage.remove();
  }
  document.getElementById("loginFormContainer").style.display = "block";
}

function hideForm() {
  document.getElementById("loginFormContainer").style.display = "none";
}

function deleteCookiesAndShowForm() {
  document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  showForm();
}

function showWelcomeMessageOrForm() {
  const name = getCookie("name");
  if (name === "") {
    showForm();
  } else {
    const body = document.body;
    body.innerHTML = "";
    const welcomeMessage = document.createElement("h1");
    welcomeMessage.id = "welcomeMessage";
    welcomeMessage.innerHTML = `Welcome ${name} <a href="#" id="logout" style="font-weight:normal;font-style:italic;margin-left:10px;">(logout)</a>`;
    body.appendChild(welcomeMessage);

    document.getElementById("logout").addEventListener("click", function () {
      deleteCookiesAndShowForm();
    });
  }
}