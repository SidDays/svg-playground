document.getElementById("sad").addEventListener("click", function (event) {
    document.querySelector("#mouthSadLine").classList.add('mouth-sad');
    document.querySelector("#noseSadLine").setAttribute("y2", 289.817524);
    //Eye Color
    document.querySelectorAll(".eyeball").forEach(function (el) {
        el.classList.add("red-eyes");
    });
    document.querySelectorAll(".eyeball").forEach(function (el) {
        el.classList.add("move-around");
    });
});

document.getElementById("happy").addEventListener("click", function (event) {
    document.querySelector("#mouthSadLine").classList.remove('mouth-sad');
    document.querySelector("#noseSadLine").setAttribute("y2", 340.817524);
    //Eye Color
    document.querySelectorAll(".eyeball").forEach(function (el) {
        el.classList.remove("red-eyes");
    });
    document.querySelectorAll(".eyeball").forEach(function (el) {
        el.classList.remove("move-around");
    });
});