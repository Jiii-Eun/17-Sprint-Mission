const loginForm = document.querySelector("#login-form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const nicknameInput = document.querySelector("#nickname");
const passwordValidInput = document.querySelector("#password-check");
const loginBtn = document.querySelector(".login-submit-btn");
const pwdVisibilityBtn = document.querySelector("#password-wrap");
const pwdValidVisibilityBtn = document.querySelector("#password-check-wrap");

const EMAIL_KEY_KR = "이메일";
const PASSWORD_KEY_KR = "비밀번호";
const NICKNAME_KEY_KR = "닉네임";
const PASSWORD_VALID_KEY_KR = "비밀번호 확인";
const EMAIL_KEY_US = "email";
const PASSWORD_KEY_US = "password";
const NICKNAME_KEY_US = "nickname";
const PASSWORD_VALID_KEY_US = "password-check";

let emailValue = "";
let passwordValue = "";
let nicknameValue = "";
let passwordValidValue = "";

// paintText와 hideText 함수에 반복되는 부분이 있어서 하나로 통합
function paintOrHideTextFunc(e, text, isAdd) {
  e.textContent = text;
  if (isAdd) {
    e.classList.add("visible-txt");
    e.previousElementSibling.classList.add("wrong-input-box");
  } else {
    e.classList.remove("visible-txt");
    e.previousElementSibling.classList.remove("wrong-input-box");
  }
}

// 값이 없을 경우 값을 입력하라는 경고창 띄움
function paintText(e, type) {
  if (type === EMAIL_KEY_KR) {
    paintOrHideTextFunc(e.nextElementSibling, `${type}을 입력해주세요.`, true);
  } else if (type === NICKNAME_KEY_KR) {
    paintOrHideTextFunc(e.nextElementSibling, `${type}을 입력해주세요.`, true);
  } else if (type === PASSWORD_KEY_KR) {
    paintOrHideTextFunc(
      e.parentElement.nextElementSibling,
      `${type}를 입력해주세요.`,
      true
    );
  } else if (type === PASSWORD_VALID_KEY_KR) {
    paintOrHideTextFunc(
      e.parentElement.nextElementSibling,
      `${type}을 입력해주세요.`,
      true
    );
  }
}

// 값을 입력하기 위해 focus in 되면 경고창 삭제
function hideText(e, type) {
  if (type === EMAIL_KEY_KR) {
    paintOrHideTextFunc(e.nextElementSibling, "", false);
  } else if (type === NICKNAME_KEY_KR) {
    paintOrHideTextFunc(e.nextElementSibling, "", false);
  } else if (type === PASSWORD_KEY_KR) {
    paintOrHideTextFunc(e.parentElement.nextElementSibling, "", false);
  } else if (type === PASSWORD_VALID_KEY_KR) {
    paintOrHideTextFunc(e.parentElement.nextElementSibling, "", false);
  }
}

// 형식에 맞지 않은 입력이나 입력수가 부족할 때 경고창 띄움
function wrongInput(e, type) {
  let pwdLength = e.value.length;
  if (type === EMAIL_KEY_KR && !/\S+@\S+\.\S+/.test(e.value)) {
    paintOrHideTextFunc(
      e.nextElementSibling,
      `잘못된 ${type} 형식입니다.`,
      true
    );
  } else if (type === PASSWORD_KEY_KR && pwdLength < 8) {
    paintOrHideTextFunc(
      e.parentElement.nextElementSibling,
      `${type}를 8자 이상 입력해주세요.`,
      true
    );
  }
}

// 이벤트리스너에 등록할 focus out 핸들러
function focusOutInput(e) {
  if (e.target.id === EMAIL_KEY_US) {
    if (e.target.value === "") {
      paintText(e.target, EMAIL_KEY_KR);
    } else {
      wrongInput(e.target, EMAIL_KEY_KR);
    }
  } else if (e.target.id === NICKNAME_KEY_US && e.target.value === "") {
    paintText(e.target, NICKNAME_KEY_KR);
  } else if (e.target.id === PASSWORD_KEY_US) {
    if (e.target.value === "") {
      paintText(e.target, PASSWORD_KEY_KR);
    } else {
      wrongInput(e.target, PASSWORD_KEY_KR);
    }
  } else if (e.target.id === PASSWORD_VALID_KEY_US && e.target.value === "") {
    paintText(e.target, PASSWORD_VALID_KEY_KR);
  }
}

// 이벤트리스너에 등록할 focus in 핸들러
function focusInInput(e) {
  if (e.target.id === EMAIL_KEY_US) {
    hideText(e.target, EMAIL_KEY_KR);
  } else if (e.target.id === NICKNAME_KEY_US) {
    hideText(e.target, NICKNAME_KEY_KR);
  } else if (e.target.id === PASSWORD_KEY_US) {
    hideText(e.target, PASSWORD_KEY_KR);
  } else if (e.target.id === PASSWORD_VALID_KEY_US) {
    hideText(e.target, PASSWORD_VALID_KEY_KR);
  }
}

// 이벤트리스너에 등록할 회원가입 버튼 활성화 핸들러
function activeBtn(emailValue, nickValue, pwdValue, pwdValidValue) {
  if (
    /\S+@\S+\.\S+/.test(emailValue) &&
    nickValue &&
    pwdValue.length >= 8 &&
    pwdValidValue === pwdValue
  ) {
    loginBtn.classList.add("login-submit-btn-active");
  } else {
    loginBtn.classList.remove("login-submit-btn-active");
  }
}

emailInput.addEventListener("focusout", focusOutInput);
passwordInput.addEventListener("focusout", focusOutInput);
nicknameInput.addEventListener("focusout", focusOutInput);
passwordValidInput.addEventListener("focusout", focusOutInput);
emailInput.addEventListener("focusin", focusInInput);
passwordInput.addEventListener("focusin", focusInInput);
nicknameInput.addEventListener("focusin", focusInInput);
passwordValidInput.addEventListener("focusin", focusInInput);

// submit 하면 실행 될 함수
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    /\S+@\S+\.\S+/.test(emailValue) &&
    nicknameValue &&
    passwordValue.length >= 8 &&
    passwordValue === passwordValidValue
  ) {
    emailInput.value = "";
    nicknameInput.value = "";
    passwordInput.value = "";
    passwordValidInput.value = "";
    location.href = "./index.html";
  }
});

// 값이 들어오면 결과에 따라 회원가입 버튼 활성화 or 비활성화
loginForm.addEventListener("input", (e) => {
  if (e.target.id === EMAIL_KEY_US) {
    emailValue = e.target.value;
  } else if (e.target.id === NICKNAME_KEY_US) {
    nicknameValue = e.target.value;
  } else if (e.target.id === PASSWORD_KEY_US) {
    passwordValue = e.target.value;
  } else if (e.target.id === PASSWORD_VALID_KEY_US) {
    passwordValidValue = e.target.value;
  }
  activeBtn(emailValue, nicknameValue, passwordValue, passwordValidValue);
});

// 비밀번호 보기/가리기 버튼 클릭
pwdVisibilityBtn.addEventListener("click", (e) => {
  if (e.target.id === "pwd-visibility-img") {
    if (e.target.src.includes("off")) {
      e.target.src = "../images/btn_visibility_on.png";
      e.target.parentElement.previousElementSibling.type = "text";
    } else {
      e.target.src = "../images/btn_visibility_off.png";
      e.target.parentElement.previousElementSibling.type = "password";
    }
  }
});

// 비밀번호 확인 보기/가리기 버튼 클릭
pwdValidVisibilityBtn.addEventListener("click", (e) => {
  if (e.target.id === "pwd-check-visibility-img") {
    if (e.target.src.includes("off")) {
      e.target.src = "../images/btn_visibility_on.png";
      e.target.parentElement.previousElementSibling.type = "text";
    } else {
      e.target.src = "../images/btn_visibility_off.png";
      e.target.parentElement.previousElementSibling.type = "password";
    }
  }
});
