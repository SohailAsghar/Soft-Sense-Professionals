// function myFunction() {
//     var rootBlock = document.getElementById('root-block-id');
//     const contentDiv = document.getElementById("content");
//     contentDiv.innerHTML = await fetchHtmlAsText("home.html");
//     rootBlock.innerHTML = `<h3>
//                     This is the text which has
//                     been inserted by JS
//                 </h3>`;
// }

async function fetchHtmlAsText(url) {
    const response = await fetch(url);
    return await response.text();
}

async function loadHome() {
    moveTo("search-form/search-form");
}

async function moveTo(url) {
    const contentDiv = document.getElementById("root-block-id");
    contentDiv.innerHTML = await fetchHtmlAsText(url+'.html');
    let scriptEle = document.createElement("script");
    scriptEle.setAttribute("src", url+'.js');
    document.head.appendChild(scriptEle);
    document.body.appendChild(scriptEle);
    scriptEle.addEventListener("load", () => {
        console.log("File loaded")
    });
}