
// highscore variables
var initialsInput = document.querySelector("#initials-text");
var initialsForm = document.querySelector("#initials-form");
var initialsList = document.querySelector("#initials-list");
var initialsScores = [];
init();
function renderInitials() {
    initialsList.innerHTML = "";
    for (var i = 0; i < initialsScores.length; i++) {
        var initial = initialsScores[i];

        var li = document.createElement("li");
        li.textContent = initial;
        li.setAttribute("data-index", i);

        initialsList.appendChild(li);
    }
}
function init() {
    var storedInitials = JSON.parse(localStorage.getItem("initialsScores"));
    if (storedInitials !== null) {
        initialsScores = storedInitials;
    }
    renderInitials();
}
function storeInitials() {
    localStorage.setItem("initialsScores", JSON.stringify(initialsScores));
}

// Form submitted
initialsForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var initialsText = initialsInput.value.trim();
    if (initialsText === "") {
        return;
    }

    initialsScores.push(initialsText);
    initialsInput.value = "";

    storeInitials();
    renderInitials();
});