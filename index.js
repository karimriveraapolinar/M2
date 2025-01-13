// JavaScript goes here
console.log("Internal JS console message. Hello World!")
console.log(document)
alert("Hello World!")
window.onload = function() {
document.body.style.color = "pink";
document.body.style.backgroundColor = "crimson";
document.body.style.fontSize = "20px";
    alert("Hello World!")
}

//const student = prompt("Enter your name: ");



document.getElementById("myH1").innerHTML = "Hello World!";
document.getElementById("myP").textContent = "Hello World!";

//Styling page elements


//Modern web dev standard
const student = prompt("Enter your name: ");
const message = document.createElement("p");
messageElement.textContent = "Hello, ${student}!"; //Template literal
document.body.appendChild(messageElement); //Add the element to the body of the page
