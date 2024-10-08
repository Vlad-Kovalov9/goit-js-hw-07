'use strict';

const categories = document.querySelectorAll("#categories li.item-task-1");

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    console.log(category.querySelector("h2").textContent);
    console.log(category.querySelectorAll("li").length);
})