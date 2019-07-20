const USERS = JSON.parse(localStorage.getItem('USERS')) || [];
const ALL_BLOGS = document.querySelector('.all-blogs');

const currentUser = USERS.reduce( (acc, curr) => {
    if (curr.isActive) {
        curr.blogs.forEach( (elm) => ALL_BLOGS.appendChild(createBlog(elm)));
        return curr;
    }
    return acc;
}, {});

function createBlog(blog) {
    let div = document.createElement('div');
    div.classList.add('myblog');

    let header = document.createElement('header');
    header.classList.add('flex-between');

    let h2 = document.createElement('h2');
    h2.textContent = blog.title;

    let button = document.createElement('button');
    button.classList.add('button', 'read');
    button.textContent = 'Read';


    let p = document.createElement('p');
    p.textContent = blog.content;

    header.appendChild(h2);
    header.appendChild(button);

    div.appendChild(header);
    div.appendChild(p);

    return div;
}
