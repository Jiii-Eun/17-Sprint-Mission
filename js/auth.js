import * as validator from './validators.js';
import { showError, clearError } from './ui.js';

// 필요한 요소 불러오기
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('email-error');
  const passwordInput = document.getElementById('password');
  const passwordError = document.getElementById('password-error');
  const nicknameInput = document.getElementById('nickname');
  const nicknameError = document.getElementById('nickname-error');
  const passwordConfirmInput = document.getElementById('password-confirm');
  const passwordConfirmError = document.getElementById('password-confirm-error');
  const submitButton = document.querySelector('.login-button');
  const loginForm = document.querySelector('.login-form');


// 유효성 검사를 위한 데이터 배열
const validationConfig = [
  {
    input: emailInput,
    error: emailError,
    rules: [
      { validator: validator.isNotEmpty, message: '이메일을 입력해주세요.' },
      { validator: validator.isEmailValid, message: '잘못된 이메일 형식입니다.' },
    ],
  },
  {
    input: passwordInput,
    error: passwordError,
    rules: [
      { validator: validator.isNotEmpty, message: '비밀번호를 입력해주세요.' },
      { validator: validator.isPasswordLongEnough, message: '비밀번호를 8자 이상 입력해주세요.' },
    ],
  },
  {
    input: nicknameInput,
    error: nicknameError,
    rules: [
      { validator: validator.isNotEmpty, message: '닉네임을 입력해주세요.' },
    ],
  },
  {
    input: passwordConfirmInput,
    error: passwordConfirmError,
    rules: [
      {
        validator: (confirmValue) => validator.areValuesEqual(passwordInput.value, confirmValue),
        message: '비밀번호가 일치하지 않습니다.',
      },
    ],
  },
];

// 유효성 검사 후 제출 버튼 활성화
const checkFormValidity = () => {
  const isFormValid = validationConfig.every(field => {
    if (!field.input) return true;
    return field.rules.every(rule => rule.validator(field.input.value));
  });
  if (submitButton) {
    submitButton.disabled = !isFormValid;
  }
};


// 유효성 검사 후 에러메시지 띄움
const validateField = (field) => {
  if (!field.input) return;
  const failedRule = field.rules.find(rule => !rule.validator(field.input.value));
  if (failedRule) {
    showError(field.input, field.error, failedRule.message);
  } else {
    clearError(field.input, field.error);
  }
};

// 이벤트 리스너 등록
validationConfig.forEach((field) => {
  if (field.input) {
    const fieldValidator = () => {
      validateField(field);
      checkFormValidity();
    };
    field.input.addEventListener('focusout', fieldValidator);
    field.input.addEventListener('input', fieldValidator);
  }
});

// 제출버튼 클릭시 경로 이동
if (loginForm) {
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!submitButton.disabled) {
      if (window.location.pathname === '/signup.html') {
        window.location.href = './login.html';
      } else {
        window.location.href = '/items.html';
      }
    }
  });
}



// 비밀번호 바뀔 경우 실시간으로 비밀번호 확인과 비교
if (passwordInput && passwordConfirmInput) {
  passwordInput.addEventListener('input', () => {
    const confirmFieldConfig = validationConfig.find(field => field.input === passwordConfirmInput);
    if (confirmFieldConfig) {
      validateField(confirmFieldConfig);
    }
  });
}

// 페이지 로드시 제출버튼 유효성 검사
if (submitButton) {
  checkFormValidity();
}