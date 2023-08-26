const regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const input = document.querySelector('input');
const submit = document.querySelector('button');
const form = document.querySelector('.form');
const errorMsj = document.querySelector('.error-message');


//Has que si el usuario da enter o presiona el boton si el email que puso no es valido se muestre la clase error en el form
//Si el email es valido que se muestre la clase success
submit.addEventListener('click', (e)=> {
    if (regExp.test(input.value)) {
        alert('Valid email');
        e.defaultPrevented;
    }else{
        e.preventDefault();
    }
});
input.addEventListener('keyup', validateEmail);

function validateEmail(e) {
    e.preventDefault();
    if (regExp.test(input.value)) {
        form.classList.add('success');
        form.classList.remove('error');
        errorMsj.innerHTML = 'Valid email';
    } else {
        form.classList.add('error');
        form.classList.remove('success');
    }
}



