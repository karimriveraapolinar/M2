// JavaScript goes here
console.log("Internal JS console message. Hello World!")
console.log(document)
alert("Hello World!")
window.onload = function() {
//document.body.style.color = "pink";
document.body.style.backgroundColor = "crimson";
document.body.style.fontSize = "20px";
    alert("Hello World!")
}

//const student = prompt("Enter your name: ");



//document.getElementById("myH1").innerHTML = "Hello World!";
//document.getElementById("myP").textContent = "Hello World!";

//Styling page elements


//Modern web dev standard
//const student = prompt("Enter your name: ");
//const message = document.createElement("p");
//messageElement.textContent = "Hello, ${student}!"; //Template literal
//document.body.appendChild(messageElement); //Add the element to the body of the page

//Event Listeners
document.getElementById("myHeader").addEventListener("click", function() {
   //Function details go here
    document.getElementById("myHeader").style.color = "white";
});
document.getElementById("myParagraph").addEventListener("mouseover", function() {  
    document.getElementById("myParagraph").style.color = "white";
});
document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("myButton").style.backgroundColor = "crimson";
});



let x; //Variable declaration
console.log(x); //Undefined
x=2;
console.log(x); 
const y = 10; //Constant initialization
let z = 3;

x = "Hello World!" //String
console.log(x);
z = true //Boolean
console.log(z);

let studentName = "John"
console.log(studentName);
window.alert(` Hello your name is ${studentName}`) //Template literal

let online = false;
console.log(online);
console.log(`Online Status: ${online}`)