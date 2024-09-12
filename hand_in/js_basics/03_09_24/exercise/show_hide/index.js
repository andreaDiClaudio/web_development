const buttonElement = document.getElementById("button");
const hiddenDivElement = document.getElementById("message");

buttonElement.addEventListener('mouseover', function () {
    hiddenDivElement.className = "visible";
})

buttonElement.addEventListener('mouseout', function () {
    hiddenDivElement.className = "hidden";
})
