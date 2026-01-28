document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            const naam = document.querySelector("#fname")?.value ?? "";
            sessionStorage.setItem("fname", naam);
            window.location.href = "chooser.html";
        });
    }

    const savedNaam = sessionStorage.getItem("fname");
    if (savedNaam) {
        const selectPlayer = document.querySelector("#playerName");
        if (selectPlayer) selectPlayer.textContent += savedNaam;
    }
});