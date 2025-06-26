export function showErrorMessage(inputEl, message) {
  const errorEl =
    inputEl.parentElement.parentElement.querySelector(".sign__input-error");
  inputEl.classList.add("sign__input__error");
  inputEl.dataset.valid = "false";
  errorEl.textContent = message;
  errorEl.style.display = "block";
}
export function hideErrorMessage(inputEl) {
  const errorEl =
    inputEl.parentElement.parentElement.querySelector(".sign__input-error");
  inputEl.classList.remove("sign__input__error");
  inputEl.dataset.valid = "true";
  errorEl.textContent = "";
  errorEl.style.display = "none";
}
export function passwordToggleHandler(event) {
  const toggleBtnElement = event.target;
  const passwordInputElement =
    toggleBtnElement.parentElement.querySelector("input");
  passwordInputElement.type =
    passwordInputElement.type === "password" ? "text" : "password";
  toggleBtnElement.ariaPressed =
    toggleBtnElement.ariaPressed === "true" ? "false" : "true";
  toggleBtnElement.classList.toggle("sign__visibility-icon__visible");
}
export function validateAndToggleFormButton(formEl, formBtnEl) {
  const isValid = [...formEl.querySelectorAll("input")].every(
    (inputEl) => inputEl.dataset.valid === "true"
  );
  if (isValid) {
    formBtnEl.disabled = false;
  } else {
    formBtnEl.disabled = true;
  }
}
