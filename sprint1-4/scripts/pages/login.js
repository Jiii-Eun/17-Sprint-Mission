import {
  hideErrorMessage,
  showErrorMessage,
  passwordToggleHandler,
  validateAndToggleFormButton,
} from "../form/dom.js";
import { validateEmail, validatePassword } from "../form/validations.js";

const form = document.querySelector(".sign__form");
const formBtn = document.querySelector("#form-btn");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const passwordVisibilityBtn = document.querySelector(
  "#password-visibility-btn"
);

emailInput.addEventListener("blur", () => {
  const message = validateEmail(emailInput.value);
  if (message) showErrorMessage(emailInput, message);
  else hideErrorMessage(emailInput);
});
passwordInput.addEventListener("blur", () => {
  const message = validatePassword(passwordInput.value);
  if (message) showErrorMessage(passwordInput, message);
  else hideErrorMessage(passwordInput);
});
form.addEventListener("focusout", () => {
  validateAndToggleFormButton(form, formBtn);
});
passwordVisibilityBtn.addEventListener("click", passwordToggleHandler);
