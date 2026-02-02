function a() {
  document.body.style.backgroundColor = "yellow"; // change on button click
}

// ---------------------form---------------------------------------------
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // stop normal form submission

  let valid = true;

  // Get input values
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  // Error message elements
  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");

  // Reset previous errors
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";

  // Name validation
  if (name === "") {
    nameError.textContent = "Name is required";
    valid = false;
  }

  // Email validation
  if (email === "") {
    emailError.textContent = "Email is required";
    valid = false;
  } else if (!email.includes("@") || !email.includes(".")) {
    emailError.textContent = "Invalid email format";
    valid = false;
  }

  // Password validation
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
  }
});

// ------------------------------------script-----------------------------------------------
function loadData() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("output").innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.body}</p>
      `;
    });
}
