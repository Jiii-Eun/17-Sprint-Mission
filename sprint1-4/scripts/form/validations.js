// validations.js
const errorMessage = {
  blank: {
    EMAIL: "이메일을 입력해주세요.",
    PASSWORD: "비밀번호를 입력해주세요.",
    NICKNAME: "닉네임을 입력해주세요.",
  },
  invalid: {
    EMAIL: "잘못된 이메일입니다.",
    PASSWORD: "비밀번호를 8자 이상 입력해주세요",
    CONFIRM_PASSWORD: "비밀번호가 일치하지 않습니다",
  },
};
export function validatePassword(value) {
  if (!value.trim()) return errorMessage.blank.PASSWORD;
  if (!(value.length >= 8)) return errorMessage.invalid.PASSWORD;
  return null;
}
export function validateEmail(value) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!value.trim()) return errorMessage.blank.EMAIL;
  if (!emailRegex.test(value)) return errorMessage.invalid.EMAIL;
  return null;
}
export function validateNickName(value) {
  if (!value.trim()) return errorMessage.blank.NICKNAME;
  return null;
}
export function validateConfirmPassword(passwordValue, confirmPasswordValue) {
  if (!confirmPasswordValue.trim()) return errorMessage.blank.PASSWORD;
  if (!(confirmPasswordValue.length >= 8)) return errorMessage.invalid.PASSWORD;
  if (passwordValue !== confirmPasswordValue)
    return errorMessage.invalid.CONFIRM_PASSWORD;
  return null;
}
