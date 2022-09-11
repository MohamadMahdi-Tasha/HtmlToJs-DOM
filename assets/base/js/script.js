// Codes By MAHDI Tasha
// Variables
const htmlInput = document.getElementById('html-input');
const jsInput = document.getElementById('JS-input');
const submitButton = document.querySelector('button[type="submit"]');
const tagsInText = [];

submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const string = htmlInput.value;
    const formattedStr = string.match(/<[a-zA-Z]>(.*?)<\/[a-zA-Z]>/g)

    formattedStr.forEach(item => {
        const tagNameEnd = item.indexOf('>')
        tagsInText.push(item.slice(1, tagNameEnd));
    })


    tagsInText.forEach(item => {
        jsInput.textContent = `document.createElement(${item})`
        console.log(item)
    })
})