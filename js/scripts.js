// Creating div

var createDiv = document.createElement("div");
createDiv.setAttribute("id","title-wrapper");
document.body.appendChild(createDiv);

document.getElementById('title-wrapper').style.cssText = "top: 50%; width: 100%; text-align: center; font-family: impact; position: absoulute; text-transform: uppercase";

// 

var message = document.createElement("h1");
message.setAttribute("id","pageMessage");
message.innerText = "Work under progress..";
createDiv.appendChild(message);
document.getElementById("pageMessage").style.cssText = "width: fit-content; margin: auto; background: black; color: white";


// Event listener

document.addEventListener('DOMContentLoaded',startScript);

// StartScrip function 

function startScript() {
    console.log('Hello World');
    document.body.style.backgroundImage = 'url("img/bg.jpg")';
}