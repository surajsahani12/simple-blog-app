const title = document.getElementById("title");
const desc = document.getElementById("content");
const image = document.getElementsByClassName("post-img");

// Get the current URL path
const queryString = window.location.search;
const queryParams = new URLSearchParams(queryString);
const param1Value = queryParams.get('key');


let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
title.innerHTML = itemsArray[param1Value].title;
desc.innerHTML = itemsArray[param1Value].desc;
image.innerHTML = itemsArray[param1Value].image;