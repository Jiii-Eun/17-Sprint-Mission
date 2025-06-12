const $userId = document.querySelector('#userId');
const $IdError = document.querySelector('#IdError');
const $password = document.querySelector('#password');
const $passwordError = document.querySelector('#passwordError');
const $loginBtn = document.querySelector('#loginBtn');
let idCheck = false;
let passwordCheck = false;

function btnCheck() {
  if (idCheck && passwordCheck) {
    $loginBtn.disabled = false;
  } else {
    $loginBtn.disabled = true;
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

$userId.addEventListener('focusout', handleFocustOutId);
$password.addEventListener('focusout', handleFocutOutPassWord);
