//Create a container to hold grid of squares
const container = document.querySelector(".container");
container.setAttribute("style", "display:grid");
const square = document.createElement("div");
square.classList.add("square");
square.setAttribute("style","background-color:blue; height: 50px; width:50px");
container.appendChild(square);

//Create a button to get user data
const buttonContainer = document.querySelector(".button-container");
const button = document.createElement("button");
button.classList.add("button");
button.setAttribute("style","background-color:green; height: 50px; width:100px");
button.textContent = "Click Me!"
buttonContainer.appendChild(button);

// Add an event listener to affect the squares when hovered over
const hover = document.querySelector(".square");
hover.addEventListener('mouseover', () => {
    square.style.background = "red";
  });

  // Create an event listener that prompts the user when a button is clicked

const prompt = document.querySelector("button");
document.addEventListener("click", function () {
window.prompt("Choose the size of your grid?","");
}
);