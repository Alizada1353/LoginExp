window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM load finished');
});
const email = document.getElementById('email').value;
const pwd = document.getElementById('pwd').value;

function loginData() {
    console.log(email);
    console.log(pwd);
}
