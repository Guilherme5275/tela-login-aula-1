const form = document.getElementById('form');
const email_input = document.getElementById('email-input');
const error_message = document.getElementById('error-massage');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    alert(email_input.value);
    error_message.innerText = passowrd_input.value;
});