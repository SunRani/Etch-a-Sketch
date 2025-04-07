const container = document.querySelector("div");

function createPixel() {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
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

    container.div.style.backgroundColor = "green";
    container.div.style.width = `${newWidth}%`;
    container.div.style.height = `${newHeight}%`;

    for (let i = 0; i < squares * squares; i++) {
        createPixel();
    }
}

const button = document.getElementById("pixelButton");

button.addEventListener("click", changePixelBoard);