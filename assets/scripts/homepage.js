const USERS = JSON.parse(localStorage.getItem('USERS')) || [];
const ALL_BLOGS = document.querySelector('.all-blogs');

const currentUser = USERS.reduce( (acc, curr) => {
    if (curr.isActive) {
        curr.blogs.forEach( (elm, index) => ALL_BLOGS.appendChild(createBlog(elm, index)));
        return curr;
    }
    return acc;
}, {});

function defaultBlogs() {
    USERS.forEach( (user) => {
        user.blogs.forEach( (blog) => {
            blog.isReading = false;
        });
    })

    updateLocal(USERS);
}

function updateLocal(DATA = []) {
    localStorage.clear();
    localStorage.setItem('USERS', JSON.stringify(DATA));
}

function selectedBlog(event) {
    currentUser.blogs[event.target.dataset.id].isReading = true;
    updateLocal(USERS);
    event.target.setAttribute('href', 'read.html');
}

function createBlog(blog, id) {
    let div = document.createElement('div');
    div.classList.add('myblog');

    let header = document.createElement('header');
    header.classList.add('flex-between');

    let h2 = document.createElement('h2');
    h2.textContent = blog.title;

    let button = document.createElement('a');
    button.classList.add('button', 'read');
    button.textContent = 'Read';
    button.setAttribute(`data-id`, `${id}`);
    button.addEventListener('click', selectedBlog);

    let p = document.createElement('p');
    p.textContent = blog.content;

    header.appendChild(h2);
    header.appendChild(button);

    div.appendChild(header);
    div.appendChild(p);

    return div;
}

defaultBlogs();