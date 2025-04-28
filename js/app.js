const submitBtn = document.getElementById("submit-btn");
const popupThank = document.getElementById("message-thanks");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  popupThank.style.display = "flex";
  submitBtn.style.display = "none";
});
