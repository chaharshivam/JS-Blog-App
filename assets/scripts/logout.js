const LOGOUT = document.getElementById('logout');

function updateLocal(DATA = []) {
    localStorage.clear();
    localStorage.setItem('USERS', JSON.stringify(DATA));
}

function logoutRedirect(event) {
    USERS.forEach(user => {
        if(currentUser.username == user.username) {
            user.isActive = false;
            return;
        }
    });
    updateLocal(USERS);
    LOGOUT.setAttribute('href', 'index.html');
}

LOGOUT.addEventListener('click', logoutRedirect);