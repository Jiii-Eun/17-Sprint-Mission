document.addEventListener("DOMContentLoaded", function () {
  // 모든 .toggle-password 버튼에 대해 반복
  document.querySelectorAll(".toggle-password").forEach(function (toggleBtn) {
    // 버튼 바로 앞의 input을 찾음
    const input = toggleBtn.parentElement.querySelector(
      'input[type="password"], input[type="text"]'
    );
    const toggleImg = toggleBtn.querySelector("img");

    // 아이콘 이미지 경로
    const eyeOffIcon = "./img/visibility_off.svg"; // 사선 있는 눈
    const eyeOnIcon = "./img/visibility_on.svg"; // 사선 없는 눈

    toggleBtn.addEventListener("click", function () {
      if (input.type === "password") {
        input.type = "text";
        toggleImg.src = eyeOnIcon;
        toggleImg.alt = "비밀번호 숨기기";
      } else {
        input.type = "password";
        toggleImg.src = eyeOffIcon;
        toggleImg.alt = "비밀번호 보기";
      }
    });
  });
});
