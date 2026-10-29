// 모바일 메뉴 버튼을 누르면 메뉴가 열리고 닫힙니다.
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("open"); // open 클래스가 있으면 메뉴를 보여 줍니다.
  });

  // 모바일 메뉴에서 링크를 누르면 메뉴를 닫습니다.
  mainNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      mainNav.classList.remove("open");
    });
  });
}
