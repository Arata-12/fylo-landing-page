 // Function to validate email
        function validateEmail() {
            // Get the value from the input field
            var email = document.getElementById('email').value;

            // Regular expression for basic email validation
            var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            // Get the output element
            var output = document.getElementById('output');
            // Check if the email matches the pattern
            if (emailPattern.test(email)) {
                output.innerText = "Valid email!";
            } else {
                output.innerText = "Invalid email. Please enter a valid email address.";
            }
        }
        // Function to display input
function displayInput() {
    // Get the value from the input field
    var input = document.getElementById('email').value;

    // Display the input value in the paragraph
    document.getElementById('output').innerText = input;
}