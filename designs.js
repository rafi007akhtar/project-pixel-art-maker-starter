// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function fill(e) {
    console.log("clicked!" + e.target.id);
}

function makeGrid() {

// Your code goes here!
    
    let canvas = document.getElementById("pixelCanvas");
    canvas.innerHTML = "";
    let newline = document.createElement("br")
    canvas.append(newline);
    
    let rows, cols;
    rows = document.getElementById("inputWidth").value;
    cols = document.getElementById("inputHeight").value;
    [rows, cols] = [cols, rows];
    
    let cellId = 1;
    let grid = document.createElement("div");
    let color = document.getElementById("colorPicker").value;
    console.log(color);
    
    for (let i = 0; i < rows; i++) {
        for (let j= 0; j < cols; j++) {
            let cell = document.createElement("span");
            
            cell.setAttribute("class", "cell");
            cell.style.backgroundColor = "white";
            
            cell.setAttribute("id", "cell" + cellId++);
            cell.addEventListener("click", fill);
            
            grid.append(cell);
        }
        newline = document.createElement("br")
        grid.append(newline);
    }  
    canvas.append(grid);   
}

let sizePicker = document.getElementById("sizePicker");
sizePicker.addEventListener("click", makeGrid);


