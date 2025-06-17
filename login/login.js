document.addEventListener('DOMContentLoaded', function () {
  const email = document.querySelector('#email');
  const error = document.querySelector('#email-error');
  const password = document.querySelector('#password');
  const pwerror = document.querySelector('#password-error');
  const button = document.querySelector('.login-button');

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

button.addEventListener('click', function () {
 if (!button.disabled) {
  location.href = '../items/items.html';
}
});

  function checkValid() {
    const emailValue = email.value;
    const passwordValue = password.value;
    const isEmailValid = emailValue.includes('@') && emailValue.includes('.');
    const isPasswordValid = passwordValue.length >= 8;
    button.disabled = !(isEmailValid && isPasswordValid);
  }
});
