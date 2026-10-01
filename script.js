const container = document.querySelector(".container");
const clearCanvas = document.querySelector("#clear-canvas");
const canvasSize = document.querySelector("#canvas-size");

let currentSize = 16;

const createGrid = function(size){
    currentSize = size;
    container.innerHTML = ''
        for(let i = 0; i< size; i++){
            const row = document.createElement("div");
            row.style.display = "flex";
            row.style.flex = "1";
            for(let j =0; j< size; j++){
                const square = document.createElement("div");
                square.classList.add("box");
                square.style.flex = "1";
                square.style.border = "none"; 
                square.addEventListener("mouseover", () => {
                    const r = Math.floor(Math.random()*256);
                    const g = Math.floor(Math.random()*256);
                    const b = Math.floor(Math.random()*256);
                    square.style.backgroundColor = `rgb(${r},${g},${b})`;
                });
            
                row.appendChild(square);
            }
            container.appendChild(row);
        }
}



canvasSize.onclick = () => {

    const input = prompt("Please enter the size of your canvas (0 - 100)");
    if(input === null) return;
    const size = parseInt(input);
    if (Number.isNaN(size) || size < 1 || size > 100) {
        alert("Please enter a number between 1 and 100.");
        return;
    }
    createGrid(size);
};


clearCanvas.onclick = () => {createGrid(currentSize);}
createGrid(16);
