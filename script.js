// Get the signup form and listen for its submission
const form = document.getElementById('signup-form');
form.addEventListener('submit', (event) => {
event.preventDefault(); // Prevent form submission

// Get the email and password input values
const email = document.getElementById('inputEmail').value;
const password = document.getElementById('inputPassword').value;

// Create an object with the user data
const data = {
email: email,
password: password
};

// Send a POST request to the API with the user data
fetch('https://fakestoreapi.com/users', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(data)
})
.then(response => {
// If the response is successful, show a success message and clear the form
if (response.ok) {
alert('User added successfully');
form.reset(); // Clear form fields
} else {
// If the response is not successful, show an error message
alert('Error adding user');
}
})
.catch(error => {
// If there is an error, log it and show an error message
console.error('Error:', error);
alert('Error adding user');
});
});