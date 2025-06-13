export class Validate {
  constructor(inputElement, errorElement) {
    this.inputElement = inputElement;
    this.errorElement = errorElement;
  }
  errorMessage = {
    blank: {
      EMAIL: "이메일을 입력해주세요.",
      PASSWORD: "비밀번호를 입력해주세요.",
      NICKNAME: "닉네임을 입력해주세요.",
      CONFIRM_PASSWORD: "비밀번호를 입력해주세요.",
    },
    invalid: {
      EMAIL: "잘못된 이메일입니다.",
      PASSWORD: "비밀번호를 8자 이상 입력해주세요",
      CONFIRM_PASSWORD: "비밀번호가 일치하지 않습니다",
    },
  };
  showErrorMessage(message) {
    this.inputElement.classList.add("sign__input__error");
    this.inputElement.dataset.valid = "false";
    this.errorElement.textContent = message;
    this.errorElement.style.display = "block";
  }
  hideErrorMessage() {
    this.inputElement.classList.remove("sign__input__error");
    this.inputElement.dataset.valid = "true";
    this.errorElement.textContent = "";
    this.errorElement.style.display = "none";
  }
  isEmptyString() {
    const string = this.inputElement.value;
    return string === null || string === undefined || string.trim() === "";
  }
  isValidEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = this.inputElement.value;
    return emailRegex.test(email);
  }
  isValidPassword() {
    const password = this.inputElement.value;
    return password.length >= 8;
  }
  validateEmailInput() {
    if (this.isEmptyString()) {
      this.showErrorMessage(this.errorMessage.blank.EMAIL);
      return;
    }
    if (!this.isValidEmail()) {
      this.showErrorMessage(this.errorMessage.invalid.EMAIL);
      return;
    }
    this.hideErrorMessage();
  }
  validatePasswordInput() {
    if (this.isEmptyString()) {
      this.showErrorMessage(this.errorMessage.blank.PASSWORD);
      return;
    }
    if (!this.isValidPassword()) {
      this.showErrorMessage(this.errorMessage.invalid.PASSWORD);
      return;
    }
    this.hideErrorMessage();
  }
  validateNicknameInput() {
    if (this.isEmptyString()) {
      this.showErrorMessage(this.errorMessage.blank.NICKNAME);
      return;
    }
    this.hideErrorMessage();
  }
  validateConfirmPasswordInput() {
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirm-password").value;
    if (this.isEmptyString()) {
      this.showErrorMessage(this.errorMessage.blank.CONFIRM_PASSWORD);
      return;
    }
    if (password !== confirmPassword) {
      this.showErrorMessage(this.errorMessage.invalid.CONFIRM_PASSWORD);
      return;
    }
    this.hideErrorMessage();
  }
  validateForm() {
    const formBtnElement = document.querySelector("#form-btn");
    const formElement = document.querySelector("form");
    const isValid = [...formElement.querySelectorAll("input")].every(
      (inputElement) => inputElement.dataset.valid === "true"
    );
    if (isValid) {
      formBtnElement.disabled = false;
    } else {
      formBtnElement.disabled = true;
    }
  }
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
