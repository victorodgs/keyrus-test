/*
*   Form Validation
*   If the field was touched and was valid, the sucess message will be shown
*   If the field was touched and was invalid, the error message will be shown
*/

// Add touch class to an element that was clicked
let touchElement = (element) => {
    element.classList.add('touched');
}

// Check if the field was touched
let isTouched = (element) => {
    if (element.classList.contains('touched')) {
        return true;
    } else {
        return false;
    }
}

// Check if the element is valid or not 
let isInputValid = (element) => {
    if (element.checkValidity()) {
        return true;
    } else {
        return false;
    }
}

// Storing the login form inputs - DOM 
let loginInputs = [document.getElementById('username'), document.getElementById('password')];

// Execute the functions to touch the element
loginInputs.forEach(el => el.addEventListener('click', (e) => {
    touchElement(e.target);
}));

// Make the validation
document.getElementById('login-form').addEventListener('submit', (e) => {
    for (let i = 0; i < loginInputs.length; i++) {
        if (isTouched(loginInputs[i]) && isInputValid(loginInputs[i])) {
            // success message
        }

        if (isTouched(loginInputs[i]) && !isInputValid(loginInputs[i])) {
            e.preventDefault();
            // error message 
            return false;
        }
    }
})
