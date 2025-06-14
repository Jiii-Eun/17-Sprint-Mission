const emailInput = document.getElementById("login-email");
const passwordInput = document.getElementById("login-password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const togglePassword = document.getElementById("togglePassword");
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
  loginBtn.classList.remove("disabled");
} else {
  loginBtn.classList.add("disabled");
}
}

  //이메일 확인
emailInput.addEventListener("blur", () => {
  const value = emailInput.value.trim();
    if (value === "") {
      emailError.textContent = "이메일을 입력해주세요.";
      emailInput.classList.add("input-error");
    } else if (!validateEmail(value)) {
      emailError.textContent = "잘못된 이메일 형식입니다.";
      emailInput.classList.add("input-error");
    } else {
      emailError.textContent = ""; 
      emailInput.classList.remove("input-error");
    }
    checkValidity();
  });

  //비밀번호 확인
passwordInput.addEventListener("blur", () => {
  const value = passwordInput.value.trim();
    if (value === "") {
      passwordError.textContent = "비밀번호를 입력해주세요.";
      passwordInput.classList.add("input-error");
    } else if (value.length < 8) {
      passwordError.textContent = "비밀번호를 8자 이상 입력해주세요.";
      passwordInput.classList.add("input-error");
    } else {
      passwordError.textContent = "";
      passwordInput.classList.remove("input-error");
    }
    checkValidity();
  });

//   //비밀번호 눈 가리기
// togglePassword.addEventListener("click", () => {
//   const eyePassword = passwordInput.getAttribute.type === "password"; 

//   passwordInput.type = eyePassword ? "text" : "password";

//   togglePassword.src = eyePassword 
//   ? "../image/icon/eyeopen_icon.png" 
//   : "../image/icon/eyeclosed_icon.png";
// })

loginBtn.addEventListener("click", (e) => {
  e.preventDefault(); //a 태그의 기본 이동 막음 
  const emailLogin = validateEmail(emailInput.value.trim());
  const passwordLogin = passwordInput.value.trim().length >= 8;
  const errorLogin = emailError.textContent || passwordError.textContent;
  
  if (emailInput.value && passwordInput.value && emailLogin && passwordLogin && !errorLogin) {
    window.location.href = "/items";
  }
});

