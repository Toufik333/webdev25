const formdata = document.getElementById('form-data');

const name = formdata.elements['name'];
const email = formdata.elements['email'];
const password = formdata.elements['password'];
const confirmPassword = formdata.elements['confirm_password'];

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm_password-error');

formdata.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    if (name.value === '' || name.value.length < 3) {
        nameError.textContent = 'Name Error';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    if (email.value === '') {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    if (password.value === '') {
        passwordError.textContent = 'Password is required';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    if (confirmPassword.value === '') {
        confirmPasswordError.textContent = 'Confirm Password is required';
        isValid = false;
    } else {
        confirmPasswordError.textContent = '';
    }

    if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = 'Password and Confirm Password should be same';
        isValid = false;
    }

    if (isValid) {
        alert('Form Submitted Successfully');
    }
});
