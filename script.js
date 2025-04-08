//Creates original board
const container = document.querySelector("div");

function createDefault() {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    container.appendChild(pixel);
    pixel.addEventListener("mouseover", () => {
        pixel.style.backgroundColor = pixel.style.backgroundColor = getRandomColor();;
    })
}
for (let i = 0; i < 36; i++) {
    createDefault();
}

//Creates new board with user specified pixels
function createPixelBoard(length, width) {
    const pixel = document.createElement("div");
    pixel.style.width = `${length}%`;
    pixel.style.height = `${width}%`;
    
    let hue = Math.floor(Math.random() * 361);
    let saturation = Math.floor((Math.random() * 100) + 1);
    let brightness = Math.floor((Math.random() * 100) + 1);

    pixel.addEventListener("mouseover", () => {
        pixel.style.backgroundColor = getRandomColor();
    })

    
    container.appendChild(pixel);
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

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

const button = document.getElementById("pixelButton");

button.addEventListener("click", changePixelBoard);