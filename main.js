const subscribeButton = document.getElementById("subscribe-Button"); //get elements from site to use in script
const inputField = document.getElementById("input-field");

subscribeButton.addEventListener("click", validate);
subscribeButton.addEventListener("click", displayPage);

function validate(e) {
  e.preventDefault();

  let valid = true;

  if (
    !inputField.value ||
    !inputField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/) //checking if valid writing was used and if not show error message.
  ) {
    const Error_msg = document.getElementById("error-message");
    Error_msg.classList.add("visible");
    inputField.classList.add("invalid");
    subscribeButton.classList.add("invalid");
    Error_msg.setAttribute("aria-hidden", "false");
    Error_msg.setAttribute("aria-invalid", "true");
    Error_msg.style.display = "flex";
  } else if (
    inputField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/) // if valid pass through and show confirmation.
  ) {
    const successMsg = document.querySelector(".success-message-container"); // gets style from page and it's css
    const fpcontainer = document.querySelector(".container"); // gets style from page and it's css
    successMsg.style.display = "flex";
    fpcontainer.style.display = "none";
  }
  return valid;
}

function displayPage() {
  let displayElement = document.getElementById("displayEmail"); // display inputed adress email
  const inputValue = inputField.value;

  displayElement.textContent = inputValue;
}

function refreshPage() {
  window.location.reload();
}
