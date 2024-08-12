const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const openEye = document.querySelector("#openEye");
const closeEye = document.querySelector("#closeEye");

btn.addEventListener("click", handleShowPassword);

function handleShowPassword() {
  if (input.type === "password") {
    input.type = "text";
    openEye.classList.toggle("hidden");
    closeEye.classList.toggle("hidden");
  } else {
    input.type = "password";
    openEye.classList.toggle("hidden");
    closeEye.classList.toggle("hidden");
  }
}
