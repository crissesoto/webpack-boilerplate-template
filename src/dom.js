console.log("dom.js file");

const body = document.querySelector("body");

 const bodyStyle = () => {
    body.style.background = "red";
};

 const addTitle = (text) => {
    const title = document.createElement('h1');
    title.textContent = text;
    body.appendChild(title);
};



 const name = "Coco";

export {bodyStyle, addTitle, name};