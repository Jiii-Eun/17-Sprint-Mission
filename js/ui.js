export function showError(inputElement, errorElement, message) {
  inputElement.classList.add('input-error');
  errorElement.textContent = message;
  errorElement.classList.add('visible');
}

export function clearError(inputElement, errorElement) {
  inputElement.classList.remove('input-error');
  errorElement.textContent = '';
  errorElement.classList.remove('visible');
}