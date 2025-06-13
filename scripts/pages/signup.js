import { Validate, passwordToggleHandler } from "../signFormValidation.js";

const emailInput = document.querySelector("#email");
const nicknameInput = document.querySelector("#nickname");
const confirmPasswordInput = document.querySelector("#confirm-password");
const passwordInput = document.querySelector("#password");
const passwordVisibilityBtn = document.querySelectorAll(
  ".sign__visibility-icon"
);
function emailInputHandler(event) {
  const validate = new Validate(
    event.target,
    document.querySelector("#email-error")
  );
  validate.validateEmailInput();
  validate.validateForm();
}
function nicknameInputHandler(event) {
  const validate = new Validate(
    event.target,
    document.querySelector("#nickname-error")
  );
  validate.validateNicknameInput();
  validate.validateForm();
}
function confirmPasswordInputHandler(event) {
  const validate = new Validate(
    event.target,
    document.querySelector("#confirm-password-error")
  );
  validate.validateConfirmPasswordInput();
  validate.validateForm();
}
function passwordInputHandler(event) {
  const validate = new Validate(
    event.target,
    document.querySelector("#password-error")
  );
  const validateForConfirmPassword = new Validate(
    confirmPasswordInput,
    document.querySelector("#confirm-password-error")
  );
  validateForConfirmPassword.validateConfirmPasswordInput();
  validate.validatePasswordInput();
  validate.validateForm();
}
emailInput.addEventListener("focusout", emailInputHandler);
nicknameInput.addEventListener("focusout", nicknameInputHandler);
confirmPasswordInput.addEventListener("focusout", confirmPasswordInputHandler);
passwordInput.addEventListener("focusout", passwordInputHandler);

passwordVisibilityBtn[0].addEventListener("click", passwordToggleHandler);
passwordVisibilityBtn[1].addEventListener("click", passwordToggleHandler);
