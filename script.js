//Create a container to hold grid of squares and a 16 X 16 collection of squares
const container = document.querySelector(".container");
container.setAttribute("style", "display:grid; grid-template-columns: repeat(4, 1fr)");
//  create a for loop to add 16 squares to the grid
let square;
for (i = 0; i < 16; i++) {
  square = document.createElement("div");
  square.classList.add("square");
  square.setAttribute("style","border: 1px solid black; height: 200px; width:auto:");
  container.appendChild(square);
}

// Add an event listener to affect the squares when hovered over
document.querySelectorAll(".square").forEach(item => {
    item.addEventListener("mouseover",()=>  {
      item.setAttribute("style","border: 1px solid black; height: 200px; width:auto; background-color: blue"); 
    });
  });

//Create a button to get user data
const buttonContainer = document.querySelector(".button-container");
const button = document.createElement("button");
button.classList.add("button");
button.setAttribute("style","background-color:green; height: 100px; width:200px");
button.textContent = "Click Me!"
buttonContainer.appendChild(button);



// Create an event listener that prompts the user when a button is clicked
// and asks for the size of their grid and creates grid
/*let choice;
const prompt = document.querySelector("button");
document.addEventListener("click", function () {
choice = window.prompt("Choose the size of your grid?","");
  forEach(function (choice) {
    container.appendChild(square);
          }
  )

}
);*/
