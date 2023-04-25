// Get the login form element
const loginForm = document.querySelector('#login-form');

// Add an event listener for when the form is submitted
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the email and password input values
    const email = document.querySelector('#inputEmail').value;
    const password = document.querySelector('#inputPassword').value;

    // Check if the email and password match
    if (email === 'example@example.com' && password === 'password') {
        // Get the user data from local storage
        const userData = JSON.parse(localStorage.getItem('user'));

        // Create an object with the updated user data
        const updatedUserData = {
            ...userData,
            email: 'davidnguyen@gmail.com',
            password: 'markie',
        };

        // Send a PUT request to update the user data
        fetch(`https://fakestoreapi.com/users/${userData.id}`, {
            method: 'PUT',
            body: JSON.stringify(updatedUserData)
        })
            .then(res => res.json())
            .then(updatedUser => {
                console.log(updatedUser);
                // Redirect to the new HTML page
                window.location.href = 'newpage.html';
            });
    } else {
        // Display an error message
        alert('Incorrect email or password');
    }
});

// Add an event listener for when the "Log in as guest" button is clicked
const guestLoginButton = document.querySelector('#guest-login');
guestLoginButton.addEventListener('click', () => {
    // Create a new user object
    const user = {
        id: 1,
        email: 'guest@example.com',
        password: 'guestpassword',
    };

    // Store the user object in local storage
    localStorage.setItem('user', JSON.stringify(user));

    // Redirect to the new HTML page
    window.location.href = 'newpage.html';
});