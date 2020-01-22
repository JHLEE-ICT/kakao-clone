backBtn = document.querySelector(".header__back-btn");

function clickBackBtn(event) {
  event.preventDefault();
  history.go(-1);
}

function init() {
  backBtn.addEventListener("click", clickBackBtn);
}

init();
