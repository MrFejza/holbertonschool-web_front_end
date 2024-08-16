
document.getElementById("loginForm").addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const name_val = document.getElementById("fname").value;
  const email_val = document.getElementById("email").value;
  setCookiesAndShowWelcomeMessage(name_val, email_val);
}

function setCookiesAndShowWelcomeMessage(name, email) {
  const daysToExpire = 10;

  // Use js-cookie to set the cookies with an expiration date
  Cookies.set("name", name, { expires: daysToExpire, path: "/" });
  Cookies.set("email", email, { expires: daysToExpire, path: "/" });

  hideForm();
  showWelcomeMessageOrForm();
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
  // Use js-cookie to remove the cookies
  Cookies.remove("name", { path: "/" });
  Cookies.remove("email", { path: "/" });

  showForm();
}

function showWelcomeMessageOrForm() {
  const name = Cookies.get("name");

  if (!name) {
    showForm();
  } else {
    const body = document.body;
    body.innerHTML = "";

    // Build the welcome message dynamically using JavaScript
    const welcomeMessage = document.createElement("h1");
    welcomeMessage.id = "welcomeMessage";
    welcomeMessage.innerHTML = `Welcome ${name}`;

    const logoutLink = document.createElement("a");
    logoutLink.href = "#";
    logoutLink.innerText = "(logout)";
    logoutLink.style.fontWeight = "normal";
    logoutLink.style.fontStyle = "italic";
    logoutLink.style.marginLeft = "10px";

    logoutLink.addEventListener("click", function () {
      deleteCookiesAndShowForm();
    });

    welcomeMessage.appendChild(logoutLink);
    body.appendChild(welcomeMessage);
  }
}
