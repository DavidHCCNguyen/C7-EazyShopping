// Get the form and the input fields
const form = document.querySelector('form');
const usernameInput = document.querySelector('#sign-in-form-username');
const passwordInput = document.querySelector('#sign-in-form-password');

// Listen for form submission
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values of the input fields
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Save the username and password to local storage
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);

  // Redirect the user to another page in the same directory
  window.location.href = "../index.html";
});
