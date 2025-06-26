import {
  hideErrorMessage,
  showErrorMessage,
  passwordToggleHandler,
  validateAndToggleFormButton,
} from "../form/dom.js";
import {
  validateEmail,
  validatePassword,
  validateNickName,
  validateConfirmPassword,
} from "../form/validations.js";

const form = document.querySelector(".sign__form");
const formBtn = document.querySelector("#form-btn");
const emailInput = document.querySelector("#email");
const nicknameInput = document.querySelector("#nickname");
const confirmPasswordInput = document.querySelector("#confirm-password");
const passwordInput = document.querySelector("#password");
const passwordVisibilityBtn = document.querySelectorAll(
  ".sign__visibility-icon"
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
nicknameInput.addEventListener("blur", () => {
  const message = validateNickName(nicknameInput.value);
  if (message) showErrorMessage(nicknameInput, message);
  else hideErrorMessage(nicknameInput);
});
confirmPasswordInput.addEventListener("blur", () => {
  const message = validateConfirmPassword(
    passwordInput.value,
    confirmPasswordInput.value
  );
  if (message) showErrorMessage(confirmPasswordInput, message);
  else hideErrorMessage(confirmPasswordInput);
});
form.addEventListener("focusout", () => {
  validateAndToggleFormButton(form, formBtn);
});
passwordVisibilityBtn[0].addEventListener("click", passwordToggleHandler);
passwordVisibilityBtn[1].addEventListener("click", passwordToggleHandler);
