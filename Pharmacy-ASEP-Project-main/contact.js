document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const successModal = new bootstrap.Modal(document.getElementById("successModal"));

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity()) {
            successModal.show();
            form.reset();
        }

        form.classList.add("was-validated");
    });
});
