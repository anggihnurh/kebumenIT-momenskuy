const name = localStorage.getItem("name");
const task = localStorage.getItem("task");
const header = document.getElementById("header");
const qContainer = document.getElementById("question-container");
const question = document.getElementById("question");
const tContainer = document.getElementById("task-container");
const input = document.getElementById("input");
const taskEl = document.getElementById("task-name");

const clock = document.getElementById("clock");
function renderClock() {
  const time = new Date().toLocaleTimeString("en-GB");
  clock.innerHTML = time.slice(0, 5);
}

const timeInterval = setInterval(() => {
  renderClock();
  clock.setAttribute("class", "fade-in-top");
}, 1000);

document.getElementById("name").innerHTML = `Halo,  ${name}!` || "";

header.style.display = name ? "block" : "none";
tContainer.style.display = task ? "block" : "none";
qContainer.style.display = task ? "none" : "block";

question.innerHTML = name
  ? "Apa prioritas kamu hari ini?"
  : "Halo, siapa nama kamu?";

taskEl.innerHTML = task || "";

function onInputEnter(inputEl) {
  const value = inputEl.value;
  if (event.keyCode === 13) {
    localStorage.setItem(name ? "task" : "name", value);
    document.location.reload();
  }
}

function finishTask(checkEl) {
  const taskEl = document.getElementById("task-name");
  taskEl.style.textDecoration = checkEl.checked ? "line-through" : "none";
}

function clearTask() {
  localStorage.removeItem("task");
  document.location.reload();
}

const fileSelect = document.getElementById("fileSelect");
const fileElem = document.getElementById("fileElem");
const avatar = document.getElementById("avatar");

fileSelect.addEventListener(
  "click",
  function (e) {
    if (fileElem) {
      fileElem.click();
    }
    e.preventDefault(); // prevent navigation to "#"
  },
  false
);

fileElem.addEventListener("change", handleFiles, false);

function handleFiles() {
  if (!this?.files?.length) {
    console.log("right here");
  } else {
    const url = URL.createObjectURL(this.files[0]);
    fileSelect.src = url;
    localStorage.setItem("avatar", url);
    // document.location.reload();
  }
}

const url = localStorage.getItem("avatar");
if (url) {
  handleFiles();
  fileSelect.src = url;
}
