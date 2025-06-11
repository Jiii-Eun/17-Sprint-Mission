
// 빈 값 확인 
export function isNotEmpty(value) {
  return value !== '';
}

// 이메일 형식 확인 
export function isEmailValid(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// 비밀번호 글자수 검사
export function isPasswordLongEnough(password) {
  return password.length >= 8;
}