const $userId = document.querySelector('#userId');
const $IdError = document.querySelector('#IdError');
const $nickName = document.querySelector('#nickname');
const $nicknameError = document.querySelector('#nicknameError');
const $password = document.querySelector('#password');
const $passwordError = document.querySelector('#passwordError');
const $passwordCheck = document.querySelector('#passwordCheck');
const $passwordCheckError = document.querySelector('#passwordCheckError');
const $signupBtn = document.querySelector('#signupBtn');
let idCheck = false;
let passwordCheck = false;
let nicknameCheck = false;
let passwordAuthCheck = false;

function btnCheck() {
  if (idCheck && passwordCheck && nicknameCheck && passwordAuthCheck) {
    $signupBtn.disabled = false;
  } else {
    $signupBtn.disabled = true;
  }
}

function handleFocustOutId() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const value = $userId.value.trim();
  if (value === '') {
    $IdError.style.display = 'block';
    $IdError.innerText = '이메일을 입력해주세요.';
    $userId.style.border = '2px solid red';
    idCheck = false;
  } else if (!emailPattern.test(value)) {
    $IdError.style.display = 'block';
    $IdError.innerText = '잘못된 이메일 형식입니다.';
    $userId.style.border = '2px solid red';
    idCheck = false;
  } else {
    $IdError.style.display = 'none';
    $userId.style.border = '';
    idCheck = true;
  }
  btnCheck();
}

function handleFocusOutNickName() {
  const value = $nickName.value.trim();
  if (value === '') {
    $nicknameError.style.display = 'block';
    $nicknameError.innerText = '닉네임을 입력해주세요.';
    $nickName.style.border = '2px solid red';
    passwordCheck = false;
  } else {
    $nicknameError.style.display = 'none';
    $nickName.style.border = '';
    nicknameCheck = true;
  }
  btnCheck();
}

function handleFocutOutPassWord() {
  const value = $password.value.trim();
  if (value === '') {
    $passwordError.style.display = 'block';
    $passwordError.innerText = '비밀번호를 입력해주세요.';
    $password.style.border = '2px solid red';
    passwordCheck = false;
  } else if (value.length < 8) {
    $passwordError.style.display = 'block';
    $passwordError.innerText = '비밀번호를 8자 이상 입력해주세요.';
    $password.style.border = '2px solid red';
    passwordCheck = false;
  } else {
    $passwordError.style.display = 'none';
    $password.style.border = '';
    passwordCheck = true;
  }
  btnCheck();
}

function handleFocusOutPassWordCheck() {
  const value = $passwordCheck.value.trim();
  if (value === $password.value) {
    $passwordCheckError.style.display = 'none';
    $passwordCheck.style.border = '';
    passwordAuthCheck = true;
  } else {
    $passwordCheckError.style.display = 'block';
    $passwordCheckError.innerText = '비밀번호가 일치하지 않습니다.';
    $passwordCheck.style.border = '2px solid red';
    passwordAuthCheck = false;
  }
  btnCheck();
}

$userId.addEventListener('focusout', handleFocustOutId);
$password.addEventListener('focusout', handleFocutOutPassWord);
$nickName.addEventListener('focusout', handleFocusOutNickName);
$passwordCheck.addEventListener('focusout', handleFocusOutPassWordCheck);
