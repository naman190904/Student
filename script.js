document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form inputs
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const gradeSelect = document.getElementById("grade");

        // Validate inputs (you can add more validations if needed)

        // If all inputs are valid, submit the form
        alert("Registration successful!"); // Replace with desired action
        registrationForm.reset(); // Reset the form
    });
});
