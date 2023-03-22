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