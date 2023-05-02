window.addEventListener('load', function() {
  const form = document.querySelector('form');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get username and password values from form inputs
    const username = document.querySelector('#sign-in-form-username').value;
    const password = document.querySelector('#sign-in-form-password').value;

    // Get saved username and password from local storage
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    // Check if login credentials match saved username and password
    if (username === savedUsername && password === savedPassword) {
      // Redirect user to another HTML page
      window.location.href = './extras/homepage.html';
    } else {
      // Remove any existing error element
      const errorElement = document.querySelector('.error-message');
      if (errorElement) {
        errorElement.remove();
      }

      // Create a new error element and insert it after the form
      const newErrorElement = document.createElement('div');
      newErrorElement.classList.add('error-message');
      newErrorElement.textContent = 'Invalid username or password, please try again with another username or password.';
      form.insertAdjacentElement('afterend', newErrorElement);
    }
  });
});
