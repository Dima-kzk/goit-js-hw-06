const categories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categories.length}`);
console.log('');

for (const e of categories) {
    const h2 = e.firstChild.nextSibling;
    const elements = e.querySelectorAll("ul li");
    console.log(`Category: ${h2.textContent}`);
    console.log(`Elements: ${elements.length}`);
    console.log('');
}