const interv = document.querySelector("#interv");
const percent = document.querySelector("#percent");
let per = 0;

const interval = setInterval(() => {
  if (per < 100) {
    per++;
    interv.style.width = (per / 100) * 406 + "px";
    percent.textContent = per + "%";
  } else {
    clearInterval(interval);
  }
}, 100);
