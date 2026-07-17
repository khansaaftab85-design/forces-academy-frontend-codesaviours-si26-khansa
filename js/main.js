
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');
    const formSuccess = document.getElementById('formSuccess');
    
    let isValid = true;

    if (name.value.trim() === "") {
        nameError.classList.remove('d-none');
        isValid = false;
    } else {
        nameError.classList.add('d-none');
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "" || !emailPattern.test(email.value.trim())) {
        emailError.classList.remove('d-none');
        isValid = false;
    } else {
        emailError.classList.add('d-none');
    }

    if (phone.value.trim() === "") {
        phoneError.classList.remove('d-none');
        isValid = false;
    } else {
        phoneError.classList.add('d-none');
    }

    if (subject.value.trim() === "") {
        subjectError.classList.remove('d-none');
        isValid = false;
    } else {
        subjectError.classList.add('d-none');
    }

    if (message.value.trim() === "") {
        messageError.classList.remove('d-none');
        isValid = false;
    } else {
        messageError.classList.add('d-none');
    }

    if (isValid) {
        formSuccess.classList.remove('d-none');
        document.getElementById('contactForm').reset();
    } else {
        formSuccess.classList.add('d-none');
    }
});