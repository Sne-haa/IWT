// script.js
document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener("submit", function (event) {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        if (!username || !password || !name || !email) {
            event.preventDefault(); // Prevent form submission
            alert("Please fill in all fields.");
        }
    });
});
