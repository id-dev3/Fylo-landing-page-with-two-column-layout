// FORM VALIDATION

const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");

    emailInput.addEventListener("input", () => {
    if (!emailInput.checkValidity()) {
        emailInput.classList.add("border-red-500");
        emailError.textContent = "Please check your email";
    } else {
        emailInput.classList.remove("border-red-500");
        emailError.textContent = "";
    }
});

const emailInputBis = document.getElementById("email-2");
    const emailErrorBis = document.getElementById("email-error-bis");

    emailInputBis.addEventListener("input", () => {
    if (!emailInputBis.checkValidity()) {
        emailInputBis.classList.add("border-red-500");
        emailErrorBis.textContent = "Please check your email";
    } else {
        emailInputBis.classList.remove("border-red-500");
        emailErrorBis.textContent = "";
    }
});