// 모바일 메뉴 열기와 닫기
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("open");
  });
}

// 게시글 분류 버튼과 검색어를 이용해 목록을 간단히 필터링합니다.
const tabs = document.querySelectorAll(".tab");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const boardRows = document.querySelectorAll("#boardBody tr");
const emptyMessage = document.getElementById("emptyMessage");
let selectedCategory = "전체";

function filterBoard() {
  const keyword = searchInput.value.trim().toLowerCase(); // 앞뒤 공백을 제거합니다.
  let visibleCount = 0;

  boardRows.forEach(function (row) {
    const category = row.dataset.category;
    const title = row.querySelector(".title-col a").textContent.toLowerCase();
    const categoryMatches = selectedCategory === "전체" || category === selectedCategory;
    const keywordMatches = title.includes(keyword);
    const showRow = categoryMatches && keywordMatches;
    row.hidden = !showRow;
    if (showRow) visibleCount++;
  });

  emptyMessage.hidden = visibleCount !== 0; // 결과가 없을 때 안내 문구를 보여 줍니다.
}

tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    tabs.forEach(function (item) { item.classList.remove("active"); });
    tab.classList.add("active");
    selectedCategory = tab.dataset.category;
    filterBoard();
  });
});
searchButton.addEventListener("click", filterBoard);
searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") filterBoard();
});
searchInput.addEventListener("input", filterBoard);

// 예제 페이지이므로 페이지 번호를 누르면 안내창을 보여 줍니다.
document.querySelectorAll("[data-page]").forEach(function (button) {
  button.addEventListener("click", function () {
    alert("이 화면은 디자인 예시입니다. 실제 페이지 이동 기능은 서버 연결 후 구현할 수 있습니다.");
  });
});
