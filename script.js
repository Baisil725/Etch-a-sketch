const container = document.querySelector(".container");
const clearCanvas = document.querySelector("#clear-canvas");
const canvasSize = document.querySelector("#canvas-size");


const createGrid = function(size){
    container.innerHTML = ''
        for(let i = 0; i< size; i++){
            const row = document.createElement("div");
            row.style.display = "flex";
            row.style.flex = "1";
            for(let j =0; j< size; j++){
                const square = document.createElement("div");
                square.style.flex = "1";
                square.style.border = "1px solid #ddd"; 
            
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


clearCanvas.onclick = () => {container.innerHTML = '';}
createGrid(16);
