// Eye color

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

// Expression

document.getElementById("sad").addEventListener("click", function (event) {
  document.querySelector("#mouthSad").setAttribute("display", "inline");
  document.querySelector("#mouthHappy").setAttribute("display", "none");
  console.log('Changed expression to sad!');
});

document.getElementById("happy").addEventListener("click", function (event) {
  document.querySelector("#mouthSad").setAttribute("display", "none");
  document.querySelector("#mouthHappy").setAttribute("display", "inline");
  console.log('Changed expression to happy!');
});