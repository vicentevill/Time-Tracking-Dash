const range = document.querySelectorAll("span");
const rangeButtons = document.querySelectorAll("aside.options > p");
const weeklyBtn = document.querySelector("#weekly");
const dailyBtn = document.querySelector("#daily");
const monthlyBtn = document.querySelector("#monthly");

function changeColors() {
  for (let i = 0; i < rangeButtons.length; i++) {
    rangeButtons[i].style.color = "#9fa1d2";
  }
}

function selectButton() {
  for (let i = 0; i < rangeButtons.length; i++) {
    rangeButtons[i].addEventListener("click", () => {
      changeColors();
      rangeButtons[i].style.color = "white";
    });
  }
}

function weekly() {
  for (let i = 0; i < range.length; i++) {
    range[i].innerText = "Last Week -";
  }
}

function monthly() {
  for (let i = 0; i < range.length; i++) {
    range[i].innerText = "Last Month -";
  }
}

function daily() {
  for (let i = 0; i < range.length; i++) {
    range[i].innerText = "Last Day -";
  }
}

function weeklyClick() {
  weeklyBtn.addEventListener("click", weekly);
}

function monthlyClick() {
  monthlyBtn.addEventListener("click", monthly);
}

function dailyClick() {
  dailyBtn.addEventListener("click", daily);
}

weekly();

weeklyClick();

monthlyClick();

dailyClick();

selectButton();
