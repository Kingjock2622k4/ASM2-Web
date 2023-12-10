function validateLogin() {
  var usernameInput = document.getElementById("username").value;
  var passwordInput = document.getElementById("password").value;

  // Replace 'kingjock2k4' and '12345678' with your actual username and password
  var validUsername = "kingjock2k4";
  var validPassword = "12345678";

  if (usernameInput === validUsername && passwordInput === validPassword) {
    // Login successful, redirect to index.html or display success message
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    // Display error message
    alert("Invalid username or password. Please try again.");
  }
}
