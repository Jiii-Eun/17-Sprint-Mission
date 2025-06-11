export function showError(inputElement, errorElement, message) {
  inputElement.classList.add('input-error');
  errorElement.textContent = message;
  errorElement.classList.add('visible');
}

export function clearError(inputElement, errorElement) {
  // --- 이 부분을 확인해주세요 ---
  // 이 함수가 실행되면 콘솔에 메시지를 출력합니다.
  console.log('clearError 함수 실행됨!', inputElement.id);

  inputElement.classList.remove('input-error');
  errorElement.classList.remove('visible');
}