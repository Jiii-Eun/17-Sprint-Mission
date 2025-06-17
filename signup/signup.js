document.addEventListener('DOMContentLoaded', function () {
  const email = document.querySelector('#email');
  const error = document.querySelector('#email-error');
  const nickname = document.querySelector('#nickname');
  const nkerror = document.querySelector('#nkerror');
  const password = document.querySelector('#password');
  const pwerror = document.querySelector('#password-error');
  const passwordConfirm = document.querySelector('#passwordConfirm');
  const pwconfirmerror = document.querySelector('#pwconfirmerror');
  const button = document.querySelector('.signup-button');

  button.disabled = true;

  email.addEventListener('focusout', function (e) {
    const value = e.target.value;
    if (value === '') {
      error.textContent = '이메일을 입력해주세요';
    } else if (!value.includes('@') || !value.includes('.')) {
      error.textContent = '잘못된 이메일 형식입니다';
    } else {
      error.textContent = '';
    }
    checkValid();
  });

  nickname.addEventListener('focusout', function (e) {
    const value = e.target.value;
    if (value === '') {
      nkerror.textContent = '닉네임을 입력해주세요';
    } else {
      nkerror.textContent = '';
    }
    checkValid();
  });

  password.addEventListener('focusout', function (e) {
    const value = e.target.value;
    if (value === '') {
      pwerror.textContent = '비밀번호를 입력해주세요';
    } else if (value.length < 8) {
      pwerror.textContent = '비밀번호를 8자 이상 입력해주세요';
    } else {
      pwerror.textContent = '';
    }
    checkValid();
  });

  passwordConfirm.addEventListener('focusout', function (e) {
    const value = e.target.value;
    if (value === '') {
      pwconfirmerror.textContent = '비밀번호 확인을 입력해주세요';
    } else if (passwordConfirm.value !== password.value) {
      pwconfirmerror.textContent = '비밀번호가 일치하지 않습니다';
    } else {
      pwconfirmerror.textContent = '';
    }
    checkValid();
  });

  
 button.addEventListener('click', function () {
    if (button.disabled === false) {
      location.href = '../login/login.html';
    }
  });

  function checkValid() {
    const emailValid = email.value.includes('@') && email.value.includes('.');
    const nicknameValid = nickname.value.trim() !== '';
    const passwordValid = password.value.length >= 8;
    const passwordsMatch = password.value === passwordConfirm.value;
    button.disabled = !(emailValid && nicknameValid && passwordValid && passwordsMatch);
  }
});
