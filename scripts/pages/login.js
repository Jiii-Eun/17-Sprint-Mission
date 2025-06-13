import { Validate, passwordToggleHandler } from "../signFormValidation.js";

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const passwordVisibilityBtn = document.querySelector(
  "#password-visibility-btn"
);
function emailInputHandler(event) {
  const validate = new Validate(
    event.target,
    document.querySelector("#email-error")
  );
  validate.validateEmailInput();
  validate.validateForm();
}
function passwordInputHandler(event) {
  const validate = new Validate(
    event.target,
    document.querySelector("#password-error")
  );
  validate.validatePasswordInput();
  validate.validateForm();
}
emailInput.addEventListener("focusout", emailInputHandler);
passwordInput.addEventListener("focusout", passwordInputHandler);
passwordVisibilityBtn.addEventListener("click", passwordToggleHandler);
