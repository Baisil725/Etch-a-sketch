let limit = 16;


const createGrid = function(){
    container.innerHTML = '';
    let input = prompt("Enter the size of the canvas");
    limit = parseInt(input);
    if(limit<=100){
        for(let i = 0; i< limit; i++){
            const row = document.createElement("div");
            row.style.display = "flex";
            row.style.flex = "1";
            for(let j =0; j< limit; j++){
                const square = document.createElement("div");
                square.style.flex = "1";
                square.style.border = "1px solid #ddd"; 
            
                row.appendChild(square);
            }
            container.appendChild(row);
        }
    }
}

const container = document.querySelector(".container");
const clearCanvas = document.querySelector("#clear-canvas");
const canvasSize = document.querySelector("#canvas-size");

canvasSize.onclick = createGrid;
clearCanvas.onclick = () => {container.innerHTML = '';}

