document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Here you can handle the feedback data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;

    // Example: Display a thank you message
    document.getElementById('thankYouMessage').style.display = 'block';

    // Optionally, send the data to a server or a service
    // You can use fetch or another method to handle submissions.
    console.log('Feedback Submitted:', { name, email, feedback });
});
