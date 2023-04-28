window.addEventListener('load', function() {
    const form = document.querySelector('#login-form');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
  
      // Get email and password values from form inputs
      const email = document.querySelector('#inputEmail').value;
      const password = document.querySelector('#inputPassword').value;
  
      // Get saved email and password from local storage
      const savedEmail = localStorage.getItem('email');
      const savedPassword = localStorage.getItem('password');
  
      // Check if login credentials match saved email and password
      if (email === savedEmail && password === savedPassword) {
        // Redirect user to another HTML page
        window.location.href = './extras/index.html';
      } else {
        // Remove any existing error element
        const errorElement = document.querySelector('.error-message');
        if (errorElement) {
          errorElement.remove();
        }
  
        // Create a new error element and insert it after the form
        const newErrorElement = document.createElement('div');
        newErrorElement.classList.add('error-message');
        newErrorElement.textContent = 'Invalid email or password, please try again with another email or password.';
        form.insertAdjacentElement('afterend', newErrorElement);
      }
    });
  });
  