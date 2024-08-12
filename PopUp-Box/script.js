const btn = document.querySelector("#clickBtn");
const modal = document.querySelector("#modal");
const gancelBtn = document.querySelector("#gancelBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const news = document.querySelector("#news");
btn.addEventListener("click", handleShowModal);
gancelBtn.addEventListener("click", handleHidModal);

const deleteHidden = (el) => {
  el.classList.remove("hidden");
};

const addHidden = (el2) => {
  el2.classList.add("hidden");
};

function handleShowModal() {
  deleteHidden(modal);
  addHidden(btn);
}

function handleHidModal() {
  addHidden(modal);
  deleteHidden(btn);
}

deleteBtn.addEventListener("click", () => {
  deleteHidden(news);
});
