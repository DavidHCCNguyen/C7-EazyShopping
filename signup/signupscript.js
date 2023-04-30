window.addEventListener('load', function() {
  const form = document.querySelector('.sign-in-form');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get email and password values from form inputs
    const email = document.querySelector('#sign-in-form-username').value;
    const password = document.querySelector('#sign-in-form-password').value;

    // Save email and password values to local storage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // Redirect user to a different page or display a message
    // to indicate that sign-up was successful
  });
});
