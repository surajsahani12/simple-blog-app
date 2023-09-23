const form = document.getElementById('form');
let itemsArray1 = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
let newArray = Array.from(itemsArray1);
let title;
let desc;
let image;
let obj;
const queryString = window.location.search;
const queryParams = new URLSearchParams(queryString);
const param1Value = queryParams.get('key');

if (param1Value === null) {

    console.log("Here")
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        title = form.elements['title'];
        desc = form.elements['content'];
        image = form.elements['image'];
        let titleV = title.value;
        let descV = desc.value;
        let imageV = image.value;
        obj = {
            title: titleV,
            desc: descV,
            image: imageV
        }
        add();
        clearField();

    })

    const add = () => {
        newArray.push(obj);
        localStorage.setItem('items', JSON.stringify(newArray));
    }

    const clearField = () => {
        title.value = "";
        desc.value = "";
        image.value = "";
    }
}

else {
    document.getElementById("title").value = newArray[param1Value].title || "";
    document.getElementById("content").value = newArray[param1Value].desc || "";
    document.getElementById("myFile").value = newArray[param1Value].image || "";

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById("title").value;
        const desc = document.getElementById("content").value;
        const image = document.getElementById("myFile").value;

        const updatedData = {
            title: title, desc: desc, image: image
        }
        newArray[param1Value] = updatedData;
        localStorage.setItem('items', JSON.stringify(newArray));

        alert("Blogpost updated successfully");
    })

}

