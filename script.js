document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registrationForm");
    const ideaForm = document.getElementById("idea-form");
    const successMessage = document.getElementById("success-message");
    const errorMessage = document.getElementById("error-message");

    // Function to validate email format
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Event listener for registration form submission
    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form inputs
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const gradeSelect = document.getElementById("grade");

        // Validate inputs
        if (nameInput.value.trim() === "") {
            alert("Please enter your full name.");
            nameInput.focus();
            return false;
        }

        if (emailInput.value.trim() === "" || !isValidEmail(emailInput.value.trim())) {
            alert("Please enter a valid email address.");
            emailInput.focus();
            return false;
        }

        if (gradeSelect.value === "") {
            alert("Please select your grade.");
            gradeSelect.focus();
            return false;
        }

        // If all inputs are valid, submit the form
        alert("Registration successful!");
        registrationForm.reset(); // Reset the form
        window.location.href = "student_idea_sharing.html";
    });

    // Event listener for idea submission form
    ideaForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get form values
        const ideaTitle = document.getElementById("idea-title").value.trim();
        const ideaDescription = document.getElementById("idea-description").value.trim();
        const ideaTags = document.getElementById("idea-tags").value.trim();

        // Form validation
        if (ideaTitle === "" || ideaDescription === "") {
            errorMessage.textContent = "Please fill in all required fields.";
            errorMessage.style.display = "block";
            return;
        }

        // Simulate form submission (replace with actual AJAX request to server)
        setTimeout(function() {
            // Display success message
            successMessage.style.display = "block";

            // Clear the form fields
            ideaForm.reset();
        }, 1000); // Simulate delay for demonstration purposes
    });
});
