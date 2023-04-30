<<<<<<< HEAD:signup/signupscript.js
// Get the form and the input fields
const form = document.querySelector('form');
const usernameInput = document.querySelector('#sign-up-form-username');
const passwordInput = document.querySelector('#sign-up-form-password');

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
  window.location.href = "../login.html";
});
=======
window.addEventListener('load', function() {
    const form = document.querySelector('.form-signin');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // Get email and password values from form inputs
      const email = document.querySelector('#inputEmail').value;
      const password = document.querySelector('#inputPassword').value;
  
      // Save email and password values to local storage
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
  
      // Redirect user to a different page or display a message
      // to indicate that sign-up was successful
    });
  });
>>>>>>> 3ad94c4af3199dbdd79d106e4591d8588d21c3a6:extras/js/signupscript.js
