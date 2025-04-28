const submitBtn = document.getElementById("submit-btn");
const popupThank = document.getElementById("message-thanks");
let formGroup = document.querySelectorAll(".form-group");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  popupThank.style.display = "flex";
  submitBtn.style.display = "none";
  formGroup.forEach((input) => {
    input.style.display = "none";
  });
});
