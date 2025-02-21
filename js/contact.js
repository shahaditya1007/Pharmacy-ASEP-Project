document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll(".needs-validation");
    const successModal = new bootstrap.Modal(document.getElementById("successModal"));

    forms.forEach(form => {
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
});
