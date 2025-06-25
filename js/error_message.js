document.addEventListener("DOMContentLoaded", function () {
  // 공통 함수
  function validateEmail(value) {
    if (!value) return "이메일을 입력해주세요.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return "잘못된 이메일 형식입니다";
    return "";
  }
  function validatePassword(value) {
    if (!value) return "비밀번호를 입력해주세요.";
    if (value.length < 8) return "비밀번호를 8자 이상 입력해주세요.";
    return "";
  }

  // 로그인/회원가입 폼 구분
  const loginForm = document.querySelector(".login-form");
  const signupForm = document.querySelector(".register-form");

  // ===== 로그인 =====
  if (loginForm) {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginButton = document.querySelector(".login-button");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    function updateLoginButtonState() {
      const emailErr = validateEmail(emailInput.value);
      const pwErr = validatePassword(passwordInput.value);
      if (!emailInput.value || !passwordInput.value || emailErr || pwErr) {
        loginButton.disabled = true;
      } else {
        loginButton.disabled = false;
      }
    }

    emailInput.addEventListener("blur", function () {
      const err = validateEmail(emailInput.value);
      emailError.textContent = err;
      emailInput.classList.toggle("error", !!err);
      updateLoginButtonState();
    });

    passwordInput.addEventListener("blur", function () {
      const err = validatePassword(passwordInput.value);
      passwordError.textContent = err;
      passwordInput.classList.toggle("error", !!err);
      updateLoginButtonState();
    });

    emailInput.addEventListener("input", function () {
      if (emailError.textContent) {
        emailError.textContent = "";
        emailInput.classList.remove("error");
      }
      updateLoginButtonState();
    });

    passwordInput.addEventListener("input", function () {
      if (passwordError.textContent) {
        passwordError.textContent = "";
        passwordInput.classList.remove("error");
      }
      updateLoginButtonState();
    });

    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!loginButton.disabled) {
        window.location.href = "/items.html";
      }
    });

    // 초기 버튼 상태
    loginButton.disabled = true;
  }

  // ===== 회원가입 =====
  if (signupForm) {
    const emailInput = document.getElementById("email");
    const nicknameInput = document.getElementById("nickname");
    const passwordInput = document.getElementById("password");
    const passwordCheckInput = document.getElementById("password-check");
    const signupButton = document.querySelector(".signup-button");

    const emailError = document.getElementById("email-error");
    const nicknameError = document.getElementById("nickname-error");
    const passwordError = document.getElementById("password-error");
    const passwordCheckError = document.getElementById("password-check-error");

    function validateNickname(value) {
      if (!value) return "닉네임을 입력해주세요.";
      return "";
    }
    function validatePasswordCheck(password, passwordCheck) {
      if (!passwordCheck) return "비밀번호를 입력해주세요.";
      if (password !== passwordCheck) return "비밀번호가 일치하지 않습니다.";
      return "";
    }

    function updateSignupButtonState() {
      const emailErr = validateEmail(emailInput.value);
      const nicknameErr = validateNickname(nicknameInput.value);
      const passwordErr = validatePassword(passwordInput.value);
      const passwordCheckErr = validatePasswordCheck(
        passwordInput.value,
        passwordCheckInput.value
      );

      if (
        !emailInput.value ||
        !nicknameInput.value ||
        !passwordInput.value ||
        !passwordCheckInput.value ||
        emailErr ||
        nicknameErr ||
        passwordErr ||
        passwordCheckErr
      ) {
        signupButton.disabled = true;
      } else {
        signupButton.disabled = false;
      }
    }

    emailInput.addEventListener("blur", function () {
      const err = validateEmail(emailInput.value);
      emailError.textContent = err;
      emailInput.classList.toggle("error", !!err);
      updateSignupButtonState();
    });

    nicknameInput.addEventListener("blur", function () {
      const err = validateNickname(nicknameInput.value);
      nicknameError.textContent = err;
      nicknameInput.classList.toggle("error", !!err);
      updateSignupButtonState();
    });

    passwordInput.addEventListener("blur", function () {
      const err = validatePassword(passwordInput.value);
      passwordError.textContent = err;
      passwordInput.classList.toggle("error", !!err);
      // 비밀번호가 바뀌면 비밀번호 확인도 다시 검사
      const pwCheckErr = validatePasswordCheck(
        passwordInput.value,
        passwordCheckInput.value
      );
      passwordCheckError.textContent = pwCheckErr;
      passwordCheckInput.classList.toggle("error", !!pwCheckErr);
      updateSignupButtonState();
    });

    passwordCheckInput.addEventListener("blur", function () {
      const err = validatePasswordCheck(
        passwordInput.value,
        passwordCheckInput.value
      );
      passwordCheckError.textContent = err;
      passwordCheckInput.classList.toggle("error", !!err);
      updateSignupButtonState();
    });

    [emailInput, nicknameInput, passwordInput, passwordCheckInput].forEach(
      (input, idx) => {
        input.addEventListener("input", function () {
          if (idx === 0) {
            emailError.textContent = "";
            emailInput.classList.remove("error");
          } else if (idx === 1) {
            nicknameError.textContent = "";
            nicknameInput.classList.remove("error");
          } else if (idx === 2) {
            passwordError.textContent = "";
            passwordInput.classList.remove("error");
            // 비밀번호가 바뀌면 비밀번호 확인도 다시 검사
            const pwCheckErr = validatePasswordCheck(
              passwordInput.value,
              passwordCheckInput.value
            );
            passwordCheckError.textContent = pwCheckErr;
            passwordCheckInput.classList.toggle("error", !!pwCheckErr);
          } else if (idx === 3) {
            passwordCheckError.textContent = "";
            passwordCheckInput.classList.remove("error");
          }
          updateSignupButtonState();
        });
      }
    );

    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!signupButton.disabled) {
        window.location.href = "/login.html";
      }
    });

    // 초기 버튼 상태
    signupButton.disabled = true;
  }
});
