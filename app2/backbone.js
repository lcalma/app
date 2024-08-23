function createRegistrationForm() {
    
    const form = document.createElement('form');
    form.setAttribute('id', 'registrationForm');
    form.className = 'form-container'; 

    
    const title = document.createElement('h2');
    title.textContent = 'Register';
    form.appendChild(title);

    
    const firstNameLabel = document.createElement('label');
    firstNameLabel.textContent = 'First Name: ';
    const firstNameInput = document.createElement('input');
    firstNameInput.setAttribute('type', 'text');
    firstNameInput.setAttribute('name', 'firstName');
    firstNameInput.setAttribute('required', true);
    form.appendChild(firstNameLabel);
    form.appendChild(firstNameInput);
    
    
    const lastNameLabel = document.createElement('label');
    lastNameLabel.textContent = 'Last Name: ';
    const lastNameInput = document.createElement('input');
    lastNameInput.setAttribute('type', 'text');
    lastNameInput.setAttribute('name', 'lastName');
    lastNameInput.setAttribute('required', true);
    form.appendChild(lastNameLabel);
    form.appendChild(lastNameInput);
    
    
    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email: ';
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('required', true);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    
    
    const passwordLabel = document.createElement('label');
    passwordLabel.textContent = 'Password: ';
    const passwordInput = document.createElement('input');
    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('name', 'password');
    passwordInput.setAttribute('required', true);
    form.appendChild(passwordLabel);
    form.appendChild(passwordInput);
    
    
    const confirmPasswordLabel = document.createElement('label');
    confirmPasswordLabel.textContent = 'Confirm Password: ';
    const confirmPasswordInput = document.createElement('input');
    confirmPasswordInput.setAttribute('type', 'password');
    confirmPasswordInput.setAttribute('name', 'confirmPassword');
    confirmPasswordInput.setAttribute('required', true);
    form.appendChild(confirmPasswordLabel);
    form.appendChild(confirmPasswordInput);
    
    
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Register';
    submitButton.setAttribute('type', 'button');
    submitButton.addEventListener('click', validateForm);
    form.appendChild(submitButton);
    
    
    document.getElementById('app').appendChild(form);
}


function validateForm() {
    const form = document.getElementById('registrationForm');
    const emailInput = form.querySelector('input[name="email"]');
    const passwordInput = form.querySelector('input[name="password"]');
    const confirmPasswordInput = form.querySelector('input[name="confirmPassword"]');
    
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address in the format name@domain.com or name@domain.com.ph');
        return;
    }
    
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    alert('Registration successful!');
}


window.onload = createRegistrationForm;
