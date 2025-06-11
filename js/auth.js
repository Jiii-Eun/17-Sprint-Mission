import * as validator from './validators.js';
import { showError, clearError } from './ui.js';


// 유효성 검사용 데이터 객체
  const validationConfig = [
    {
      input: document.getElementById('email'),
      error: document.getElementById('email-error'),
      rules: [
        { validator: validator.isNotEmpty, message: '이메일을 입력해주세요.' },
        { validator: validator.isEmailValid, message: '잘못된 이메일 형식입니다.' },
      ],
    },
    {
      input: document.getElementById('password'),
      error: document.getElementById('password-error'),
      rules: [
        { validator: validator.isNotEmpty, message: '비밀번호를 입력해주세요.' },
        { validator: validator.isPasswordLongEnough, message: '비밀번호를 8자 이상 입력해주세요.' },
      ],
    },
  ];


//CTA 버튼 가져오기
const submitButton = document.querySelector('.login-button');

//전체 필드 검증 후 버튼 상태 업데이트 
  const checkFormValidity = () => {
    let isFormValid = true;

    for (const field of validationConfig) {
      if (!field.input) continue; // 페이지에 없는 필드 건너뜀

      for (const rule of field.rules) {
        if (!rule.validator(field.input.value)) {
          isFormValid = false; // 규칙 위반시 valid 하지 않음
          break; // 검증 중지
        }
      }
      if (!isFormValid) break;
    }

    submitButton.disabled = !isFormValid; //form invalid할 경우 CTA disabled로 설정 
  };


//개별 인풋 유효성 검사 함수
 const validateField = (field) => {
    if (!field.input) return;

    for (const rule of field.rules) {
      if (!rule.validator(field.input.value)) {
        showError(field.input, field.error, rule.message);
        checkFormValidity(); // 버튼 상태 업데이트
        return;
      }
    }
    clearError(field.input, field.error);
    checkFormValidity(); // 버튼 상태 업데이트
  };


  validationConfig.forEach((field) => {
    if (field.input) {
      const fieldValidator = () => validateField(field);
      field.input.addEventListener('focusout', fieldValidator);
      field.input.addEventListener('input', fieldValidator);
    }
  });

checkFormValidity(); // 페이지 처음 로드시 버튼 상태 확인

//활성화된 버튼 클릭시 items로 이동
  const loginForm = document.querySelector('.login-form');

  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault(); //폼 기본동작 비활성화

      if (!submitButton.disabled) {
        window.location.href = '/items';
      }
    });
  }