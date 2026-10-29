// 모바일 메뉴 열기와 닫기
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("open");
  });
}

const writeForm = document.getElementById("writeForm");
const previewButton = document.getElementById("previewButton");
const previewPanel = document.getElementById("previewPanel");
const closePreview = document.getElementById("closePreview");

// 입력한 내용을 미리보기 영역에 표시합니다.
previewButton.addEventListener("click", function () {
  const category = document.getElementById("category").value || "분류 미선택";
  const title = document.getElementById("title").value.trim() || "제목이 입력되지 않았습니다.";
  const writer = document.getElementById("writer").value.trim() || "작성자 미입력";
  const content = document.getElementById("content").value.trim() || "내용이 입력되지 않았습니다.";

  document.getElementById("previewCategory").textContent = category;
  document.getElementById("previewTitle").textContent = title;
  document.getElementById("previewWriter").textContent = "작성자: " + writer;
  document.getElementById("previewContent").textContent = content;
  previewPanel.hidden = false;
  previewPanel.scrollIntoView({ behavior: "smooth", block: "start" });
});

closePreview.addEventListener("click", function () {
  previewPanel.hidden = true;
});

// 등록 버튼: 필수 입력값을 확인한 후 데모 안내를 표시합니다.
writeForm.addEventListener("submit", function (event) {
  event.preventDefault(); // 서버로 전송하지 않고 이 화면에서만 확인합니다.

  const category = document.getElementById("category").value;
  const title = document.getElementById("title").value.trim();
  const writer = document.getElementById("writer").value.trim();
  const content = document.getElementById("content").value.trim();

  if (category === "") {
    alert("분류를 선택해 주세요.");
    document.getElementById("category").focus();
    return;
  }
  if (title === "") {
    alert("제목을 입력해 주세요.");
    document.getElementById("title").focus();
    return;
  }
  if (writer === "") {
    alert("작성자를 입력해 주세요.");
    document.getElementById("writer").focus();
    return;
  }
  if (content === "") {
    alert("내용을 입력해 주세요.");
    document.getElementById("content").focus();
    return;
  }

  alert("입력 내용을 확인했습니다.\\n현재는 디자인 예제이므로 게시글이 실제 저장되지는 않습니다.");
});
