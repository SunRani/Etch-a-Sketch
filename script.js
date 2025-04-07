const container = document.querySelector("div");

function createPixel() {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    container.appendChild(pixel);
}

function createPixelBoard(length, width) {
    const pixel = document.createElement("div");
    pixel.style.width = `${length}%`;
    pixel.style.height = `${width}%`;
    
    let hue = Math.floor(Math.random() * 361);
    let saturation = Math.floor((Math.random() * 100) + 1);
    let brightness = Math.floor((Math.random() * 100) + 1);

    pixel.addEventListener("mouseenter", () => {
        pixel.style.backgroundColor = "red";
    })

    pixel.addEventListener("mouseleave", () => {
        pixel.style.backgroundColor = "white";
    })
    
     
    container.appendChild(pixel);
}

for (let i = 0; i < 36; i++) {
    createPixel();
}

function deleteBoard( oldBoard ) {
    const container = document.getElementById("container");
    container.remove();
}

function changePixelBoard() {
    const squares = prompt("How many Squares per side would you like?");
    const newWidth = 100 / parseFloat(squares);
    const newHeight = newWidth;
    
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
   
    for (let i = 0; i < squares * squares; i++) {
        createPixelBoard(newWidth, newHeight);
    }
}

const button = document.getElementById("pixelButton");

button.addEventListener("click", changePixelBoard);