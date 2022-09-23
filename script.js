const email = document.getElementById('email');
const form = document.querySelector('#form');
const errorIcon = document.querySelector('#error-icon');
const small = form.querySelector('small');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    checkEmail();
})


function checkEmail () {
    const emailValue = email.value.trim();

    if(emailValue === "") {
        small.classList.add('error')
        small.innerText = "Please provide an email"
        email.style.border= "1.5px solid hsl(0, 93%, 68%)"
        errorIcon.style.display= "block";
    } else if (!isEmail(emailValue)) {
        small.classList.add('error')
        small.innerText = "Please provide a valid email"
        email.style.border= "1.5px solid #e74c3c"
        errorIcon.style.display= "block";
    } else {
        small.classList.remove('error');
        email.style.border= "1.5px solid hsl(0, 10%, 89%)"
        errorIcon.style.display= "none";
    }
    
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



