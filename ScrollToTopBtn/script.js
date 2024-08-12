const topBtn = document.querySelector("#topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    topBtn.classList.remove("hidden");
  } else {
    topBtn.classList.add("hidden");
  }
});

topBtn.addEventListener("click", handleGoTop);

function handleGoTop() {
  window.scrollTo({
    behavior: "smooth",
    top: 0,
  });
}
