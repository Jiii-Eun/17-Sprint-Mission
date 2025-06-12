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
      { validator: validator.isNotEmpty},
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
      // 인풋영역 focusout시 오류 표시
      field.input.addEventListener('focusout', () => {
        validateField(field);
      });
      
      // 제출버튼 실시간 유효성 검사 후 상태 업데이트
      field.input.addEventListener('input', () => {
        checkFormValidity();
      });
    }
  });

// 비밀번호 필드를 focusout 할 때, 비밀번호 확인 필드를 다시 검사
  if (passwordInput && passwordConfirmInput) {
    passwordInput.addEventListener('focusout', () => {
      if (passwordConfirmInput.value) {
        const confirmFieldConfig = validationConfig.find(field => field.input === passwordConfirmInput); 
        if (confirmFieldConfig) { // 비밀번호 확인 칸에 값이 값이 있는 경우만 검사
          validateField(confirmFieldConfig);
        }
      }
    });
  }

// 비밀번호 보임/숨김 토글
const toggleVisibilityButtons = document.querySelectorAll('.toggle-visibility');

toggleVisibilityButtons.forEach(button => {
  button.addEventListener('click', () => {
    const passwordField = button.previousElementSibling;
    const eyeIcon = button.querySelector('.eye-icon');
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
      eyeIcon.src = './icon/ic_visibility_on.svg'; 
    } else {
      passwordField.type = 'password';
      eyeIcon.src = './icon/ic_visibility_off.svg'; 
    }
  });
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

// 페이지 로드시 제출버튼 유효성 검사
if (submitButton) {
  checkFormValidity();
}