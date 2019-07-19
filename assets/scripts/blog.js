const BLOG_TITLE = document.querySelector('#title-input');
const BLOG_CONTENT = document.querySelector('#blog-content');
const ADD_BLOG = document.querySelector('.add-blog');

const USERS = JSON.parse(localStorage.getItem('USERS')) || [];

currentUser = USERS.reduce( (acc, curr) => {
    if (curr.isActive) {
        return curr;
    }
});

// console.log(currentUser);

function updateLocal(DATA = []) {
    localStorage.clear();
    localStorage.setItem('USERS', JSON.stringify(DATA));
}

function updateUser(user) {
    USERS.forEach(elm => {
        if(elm.username == user.username) {
            elm = {...user};
            return;
        }
    });
    updateLocal(USERS);
}

function blogTitle(event) {

    const blog = {
        title: BLOG_TITLE.value.trim(),
        content: BLOG_CONTENT.value.trim()
    };
    currentUser.blogs.push(blog);
    updateUser(currentUser);
    console.log(USERS);
}

ADD_BLOG.addEventListener('click', blogTitle);