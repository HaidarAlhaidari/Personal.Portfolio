// Byt mellan mörkt och ljust tema
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
});

// Kontaktformulär
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const messageText = document.getElementById("messageText").value;

    if (name === "" || email === "" || messageText === "") {
        message.textContent = "Fyll i alla fält!";
        message.style.color = "red";
    } else {
        message.textContent = "Tack! Meddelandet skickades.";
        message.style.color = "green";
        form.reset();
    }
});