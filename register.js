function validateLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementsByName("confirm password")[0].value;

  // Perform your validation checks here
  if (username.trim() === "") {
    alert("Please enter your username");
    return false;
  }

  if (password.trim() === "") {
    alert("Please enter your password");
    return false;
  }

  if (confirmPassword.trim() === "") {
    alert("Please confirm your password");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return false;
  }

  // Display success message
  alert("Registration successful! Redirecting to login page.");
  setTimeout(function () {
    window.location.href = "login.html";
  }, 500);
}
