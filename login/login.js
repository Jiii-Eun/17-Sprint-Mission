const emailInput = document.getElementById("login-email");
const passwordInput = document.getElementById("login-password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const loginBtn = document.getElementById("loginBtn");

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function checkValidity() {
  const emailValid = validateEmail(emailInput.value);
  const passwordValid = passwordInput.value.length >= 8;
  const errors = emailError.textContent || passwordError.textContent;

if (emailInput.value && passwordInput.value && emailValid && passwordValid && !errors) {
  loginBtn.disabled = false;
  } else {
    loginBtn.disabled = true;
  }
}

emailInput.addEventListener("blur", () => {
  const value = emailInput.value.trim();
    if (value === "") {
      emailError.textContent = "이메일을 입력해주세요.";
    } else if (!validateEmail(value)) {
      emailError.textContent = "잘못된 이메일 형식입니다.";
    } else {
      emailError.textContent = ""; 
      emailInput.classList.remove("error");
    }
    checkValidity();
  });

passwordInput.addEventListener("blur", () => {
  const value = passwordInput.value.trim();
    if (value === "") {
      passwordError.textContent = "비밀번호를 입력해주세요.";
      passwordError.classList.add("input-error");
      passwordInput.classList.add("error-text");
    } else if (value.length < 8) {
      passwordError.textContent = "비밀번호를 8자 이상 입력해주세요.";
      passwordError.classList.add("input-error");
      passwordError.classList.add("error-text")
    } else {
      passwordError.textContent = "";
      passwordInput.classList.remove("error");
    }
    checkValidity();
  });

loginBtn.addEventListener("click", (e) => {
  e.preventDefault(); //a 태그의 기본 이동 막음 
  const emailLogin = validateEmail(emailInput.value.trim());
  const passwordLogin = passwordInput.value.trim().length >= 8;
  const errorLogin = emailError.textContent || passwordError.textContent;
  
  if (emailInput.value && passwordInput.value && emailValid && passwordValid && !errors) {
    window.location.href = "/items";
  }
});

