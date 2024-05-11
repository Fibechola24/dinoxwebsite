// Initialize EmailJS
(function() {
    emailjs.init({
        publicKey: "3XyHSCzmtfHDndiwS" // Replace with your EmailJS public key
    });
})();

// Handle form submission
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Send email using EmailJS
        emailjs.sendForm('service_ac2jfty', 'template_5n5dkyk', this)
            .then(() => {
                console.log('SUCCESS!'); // Log success message
                // Show SweetAlert success notification
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Your message has been sent successfully!',
                    showConfirmButton: false,
                    timer: 2000 // Close the notification after 2 seconds
                });
                // Optionally, clear the form fields after successful submission
                document.getElementById('contact-form').reset();
            })
            .catch((error) => {
                console.log('FAILED...', error); // Log error message
                // Show SweetAlert error notification
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong. Please try again later.'
                });
            });
    });
}
