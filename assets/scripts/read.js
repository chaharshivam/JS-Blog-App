const TITLE = document.querySelector('section h1');
const CONTENT = document.querySelector('section p');
const USERS = JSON.parse(localStorage.getItem('USERS')) || [];

const currentUser = USERS.reduce( (acc, curr) => {
    if (curr.isActive) {
        return curr;
    }
    return acc;
}, {});

function displayBlog(USERS) {
    let blog = currentUser.blogs.filter( elm => elm.isReading );
    
    TITLE.textContent = blog[0].title;
    CONTENT.textContent = blog[0].content;
}

displayBlog();