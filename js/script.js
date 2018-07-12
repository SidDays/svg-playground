document.getElementById("eyesGreen").addEventListener("click", function (event) {
  document.querySelectorAll(".eyeball").forEach(function(el) {
    el.classList.add("green-eyes");
  })
  console.log('Changed eye color to green!');
});

document.getElementById("eyesBlack").addEventListener("click", function (event) {
  document.querySelectorAll(".eyeball").forEach(function(el) {
    el.classList.remove("green-eyes");
  })
  console.log('Changed eye color to black!');
});