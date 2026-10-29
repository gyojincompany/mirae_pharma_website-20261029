// 모바일 메뉴 열기와 닫기
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("open");
  });
}

// 인쇄하기 버튼을 누르면 브라우저의 인쇄 창을 엽니다.
const printButton = document.getElementById("printButton");
if (printButton) {
  printButton.addEventListener("click", function () {
    window.print();
  });
}
