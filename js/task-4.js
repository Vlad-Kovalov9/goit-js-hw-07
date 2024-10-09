'use strict';

const form = document.querySelector(".login-form");

form.addEventListener("submit", event => {
    event.preventDefault();

    const userEmail = event.target.email.value.trim();
    const userPassword = event.target.password.value.trim();

    if (userEmail === "" || userPassword === "") {
        alert("All form fields must be filled in!");
        return;
    } else {
        const userForm = {
            email: userEmail,
            password: userPassword
        };

        console.log(userForm);
        form.reset();
    }
})
