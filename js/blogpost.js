let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
let newArray = Array.from(itemsArray);
var articles = document.getElementsByClassName("articles")[0];
const edits = document.getElementsByClassName("edit");
const form = document.getElementById('form');
// Get the current URL path
const createPost = (title, desc, image, index) => {
    let divElement = document.createElement("div");
    divElement.className = "article";

    let hr = document.createElement("hr");
    divElement.innerHTML = `
            <div class="image">
                <a href=/blog.html?key=${index}><img src="img/article2.jpg" alt=""></a>
            </div>
            <div class="main-article">
                <div class="article-content">
                    <a href=/blog.html?key=${index}>
                        <h3 id="header">${title}</h3>
                    </a>
                    <span>author name</span>
                    <span>23 sep 2023</span>
                    <p id="body">${desc}</p>
                </div>
                <div class="editor">
                    <a href= /form.html?key=${index}><button class="btn edit">Edit</button></a>
                    <button class="btn delete">Delete</button>
                </div>
            </div>
    `;
    articles.appendChild(divElement);

}

newArray.forEach((items, index) => {
    createPost(items.title, items.desc, items.image, index);
});

document.getElementsByClassName("articles")[0].addEventListener('click', (e) => {
    target = e.target;
    if (target.classList.contains("delete")) {
        target.parentElement.parentElement.parentElement.remove();
        // localStorage.removeItem()
    }
    console.log(target);

    console.log(target.classList);
})
