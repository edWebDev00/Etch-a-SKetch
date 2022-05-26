//Create a container to hold grid of squares and a 16 X 16 collection of squares
const container = document.querySelector(".container");
container.setAttribute("style", "display:grid; height: 600px; width:900px; grid-template-columns: repeat(10, 10%)");
//  create a for loop to add 16 squares to the grid
let square;
for (i = 0; i < 20; i++) {
  square = document.createElement("div");
  square.classList.add("square");
  square.setAttribute("style","border: 1px solid black; height: auto; width:auto");
  container.appendChild(square);
}

// Add an event listener to affect the squares when hovered over
document.querySelectorAll(".square").forEach(item => {
  item.addEventListener("mouseover",()=>  {
    item.setAttribute("style","border: 1px solid black; height: auto; width: auto; background-color: blue"); 
  });
});

//Create a button to get user data
const buttonContainer = document.querySelector(".button-container");
const button = document.createElement("button");
button.classList.add("button");
button.setAttribute("style","background-color:green; height: auto; width:auto");
button.textContent = "Click Me!"
buttonContainer.appendChild(button);



// Create an event listener that prompts the user when a button is clicked, 
//asks for the size of the grid and replaces the old one.  
let choice;
let newSquare;
let eraseSquare
const prompt = document.querySelector("button");
document.addEventListener("click", function () {
choice = window.prompt("Choose the size of your grid?","");
if (choice > 100) return;

  for (i = 0; i < choice; i++) {
  newSquare = document.createElement("div");
  newSquare.classList.add("newSquare");
  newSquare.setAttribute("style","border: 1px solid black; height: auto; width:atuo:");
  container.appendChild(newSquare);
  }
  document.querySelectorAll(".square").forEach(item => {
    item.setAttribute("style", "display:none"); 
  });
  
 
  
  
  document.querySelectorAll(".newSquare").forEach(item => {
  item.addEventListener("mouseover",()=>  {
    item.setAttribute("style","border: 1px solid black; height: auto; width:auto; background-color: blue"); 
  });
});
}

);

