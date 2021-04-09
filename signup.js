const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const password2Value = password2.value;


    if(usernameValue === ''){
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);
    }

    if (emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === ''){
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password);
    }

    if (password2Value === ''){
        setErrorFor(password2, 'Password2 cannot be blank');
    } else if (passwordValue !== password2Value){
        setErrorFor(password2, 'Passwords does not match')
    } else {
        setSuccessFor(password2);
    }

}

function setErrorFor(input, message){
    const formBox = input.parentElement;
    const small = formBox.querySelector ('small');

    small.innerText = message;
    formBox.className = 'form-box error';
}
function setSuccessFor(input){
    const formBox = input.parentElement;
    formBox.className = 'form-box success';
}



