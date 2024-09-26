document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(this);

    // Show thank you message after submission
    fetch(this.action, {
        method: this.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            document.getElementById('thankYouMessage').style.display = 'block';
            this.reset(); // Reset the form
        } else {
            alert('Oops! Something went wrong. Please try again.');
        }
    }).catch(error => {
        alert('Oops! There was a problem submitting your feedback.');
    });
});

