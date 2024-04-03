document.addEventListener('DOMContentLoaded', function () {
    // Function to handle form submission
    function handleFormSubmission(event) {
        event.preventDefault(); // Prevents the default form submission behavior

        // Collect form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
        };

        // Log the form data (you can replace this with your desired action)
        console.log('Form Data:', formData);
    }

    // Attach the form submission function to the form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }
});