const emailInput = document.getElementById("login-email");
const nicknameInput = document.getElementById("nickname");
const passwordInput = document.getElementById("signup-password");
const passwordDoubleInput = document.getElementById("signup-password-check");
const emailError = document.getElementById("emailError");
const nicknameError = document.getElementById("nicknameError");
const passwordError = document.getElementById("passwordError");
const passwordDoubleError = document.getElementById("passwordDoubleError");
const signupBtn = document.getElementById("signup-button");

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// 아래 재확인 (완)

function checkValidity() {
  const emailValid = validateEmail(emailInput.value);
  const passwordValid = passwordInput.value.length >= 8;
  const passwordDoubleValid = passwordInput.value === passwordDoubleInput.value;
  const nicknameValid = nicknameInput.value.trim() !== "";
  const errors = emailError.textContent || passwordError.textContent || nicknameError.textContent;

if (
  emailInput.value && 
  nicknameInput.value &&
  passwordInput.value && 
  passwordDoubleInput.value &&
  emailValid && 
  nicknameValid &&
  passwordDoubleValid &&
  passwordValid && 
  !errors
) {
  signupBtn.classList.remove("disabled");
} else {
  signupBtn.classList.add("disabled");
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

  //닉네임 확인
nicknameInput.addEventListener("blur", () => {
  const value = nicknameInput.value.trim();
    if (value === "") {
      nicknameError.textContent = "닉네임을 입력해주세요.";
      nicknameInput.classList.add("input-error");
    } else {
      nicknameError.textContent = ""; 
      nicknameInput.classList.remove("input-error");
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

  //비밀번호 더블 확인
passwordDoubleInput.addEventListener("blur", () => {
  const value = passwordDoubleInput.value.trim();
    if (value === "") {
      passwordDoubleError.textContent = "비밀번호를 입력해주세요.";
      passwordDoubleInput.classList.add("input-error");
    } else if (passwordInput.value !== passwordDoubleInput.value) {
      passwordDoubleError.textContent = "비밀번호가 일치하지 않습니다.";
      passwordDoubleInput.classList.add("input-error");
    } else {
      passwordError.textContent = "";
      passwordInput.classList.remove("input-error");
    }
    checkValidity();
  });

  //회원가입 버튼
signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const emailSignup = validateEmail(emailInput.value.trim());
  const nicknameSignup = nicknameInput.value.trim() !== "";
  const passwordSignup = passwordInput.value.trim().length >= 8;
  const passwordDoubleSignup = passwordInput.value === passwordDoubleInput.value;
  const errorSignup = emailError.textContent || passwordError.textContent || nicknameError.textContent;
  
  if (
    emailInput.value && 
    passwordInput.value && 
    emailSignup && 
    nicknameSignup && 
    passwordSignup && 
    passwordDoubleSignup && 
    !errorSignup
  ) {
    window.location.href = "/items";
  }
});

