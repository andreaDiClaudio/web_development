const form = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

// Attach blur event listeners for validation
nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
passwordInput.addEventListener('blur', validatePassword);


// Function to validate the name input
function validateName() {
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        return false;
    } else {
        nameError.textContent = '';
        return true;
    }
}

// Function to validate the email input
function validateEmail() {
    const emailValue = emailInput.value.trim();
    if (emailValue === '' || !emailValue.includes('@')) {
        emailError.textContent = 'Valid email is required.';
        return false;
    } else if (localStorage.getItem(emailValue)) {
        emailError.textContent = 'Email is already taken.';
        return false;
    } else {
        emailError.textContent = '';
        return true;
    }
}

// Function to validate the password input
function validatePassword() {
    const passwordValue = passwordInput.value.trim();
    if (passwordValue === '' || passwordValue.length < 5 || !/\d/.test(passwordValue)) {
        passwordError.textContent = 'Password must be at least 5 characters long and contain at least one number.';
        return false;
    } else {
        passwordError.textContent = '';
        return true;
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Validate all fields on submit
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    // Check if all fields are valid
    if (isNameValid && isEmailValid && isPasswordValid) {
        const user = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            password: passwordInput.value.trim(),
        };

        // Save to localStorage using email as the key
        localStorage.setItem(user.email, JSON.stringify(user));

        // Alert the user and redirect after a short delay
        alert('User has been created successfully!');
        window.location.href = 'index.html';
    }
});
