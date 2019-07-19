const L_USERNAME = document.getElementById('login-username');
const L_PASSWORD = document.getElementById('login-password');
const S_USERNAME = document.getElementById('signup-username');
const S_PASSWORD = document.getElementById('signup-password');
const VERIFY = document.getElementById('verify-login');
const SIGNUP = document.getElementById('add-user');
const GOTO_SIGNUP = document.querySelector('.goto-signup');
const L_WRAPPER = document.querySelector('.login-wrapper');
const S_WRAPPER = document.querySelector('.signup-wrapper');


const USERS = JSON.parse(localStorage.getItem('USERS')) || [];
// Schema

function updateLocal(DATA = []) {
    localStorage.clear();
    localStorage.setItem('USERS', JSON.stringify(DATA));
}
// Login
function authenticate(event) {
    
    const verified = USERS.filter( (elm) => {
        return (L_USERNAME.value == elm.username && L_PASSWORD.value == elm.password);
    });
    
    if (verified.length) {
        VERIFY.setAttribute('href', 'homepage.html');
        console.log(event);
    } else {
        alert('Wrong username/password!!');
    }
}

VERIFY.addEventListener('click', authenticate);

// Open Signup Form
function openSignup(event) {
    L_WRAPPER.style.display = 'none';
    S_WRAPPER.style.display = 'block';
}
GOTO_SIGNUP.addEventListener('click', openSignup);

// Signup
function addUser(event) {

    if (S_USERNAME.value.trim() && S_PASSWORD.value.trim()) {
        const newUser = {
            username: S_USERNAME.value,
            password: S_PASSWORD.value
        }
    
        const verified = USERS.filter( (elm) => elm.username == newUser.username);
    
        if(!verified.length) {
            USERS.push(newUser);
            updateLocal(USERS);
            SIGNUP.setAttribute('href', 'homepage.html');
        } else {
            alert('Username already taken!!');
        }
    } else {
        alert('Username/Password can\'t be blank');
    }
}

SIGNUP.addEventListener('click', addUser);

localStorage.setItem('USERS', JSON.stringify(USERS));