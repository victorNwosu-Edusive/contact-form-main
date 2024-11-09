document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission for validation
    
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email-address').value.trim();
    const generalEnquiry = document.getElementById('general-enquiry').value.trim();
    const supportRequest = document.getElementById('support-request').value.trim();
    const message = document.getElementById('message').value.trim();

    
    let errorMessages = []; // Store error messages here
    
    // Check if username is filled out
    if (firstName === '') {
        errorMessages.push('First Name is required.');
    }

    if (lastName === ''){
        errorMessages.push('Last Name is required');
    }

    if (message === ''){
        errorMessages.push('Message is required');
    }
    
    // Check if email is filled out and valid
    if (email === '') {
        errorMessages.push('Email is required.');
    } else if (!isValidEmail(email)) {
        errorMessages.push('Please enter a valid email address.');
    }
    
    // Show error messages if there are any
    if (errorMessages.length > 0) {
        document.getElementById('error-message').innerText = errorMessages.join('\n');
    } else {
        document.getElementById('error-message').innerText = '';
        alert('Form submitted successfully!');
        // Proceed with form submission (e.g., using AJAX or a simple form submit)
        // this.submit();
    }
});

// Helper function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
