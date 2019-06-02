const add = document.getElementById('add-frame');
const canvas = document.getElementById('main-canvas');
const ctx = canvas.getContext('2d');
let myCanvas = document.getElementById('myCanvas');
let copyButton;
let deleteButton;

const changeFrame = (e) => {
    const tool = e.target;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(tool, 0, 0, tool.width, tool.height, 0, 0, canvas.width, canvas.height);
    myCanvas = tool;
};

const deleteFunction = (e) => {
    const parent = e.target.parentNode;
    document.body.removeChild(parent);
};

const copyFunction = (e) => {
        const co = e.target.previousElementSibling;
            const cont = document.createElement('DIV');
            cont.classList.add('container');
            document.body.appendChild(cont);
            const cop = document.createElement('CANVAS');
            cop.classList.add('my-canvas');
            cop.width = 128;
            cop.height = 128;
            cop.onclick = changeFrame;
            cont.appendChild(cop);
            const destCtx = cop.getContext('2d');
            destCtx.drawImage(co, 0, 0);
            myCanvas = cop;
            createButton();
            cont.appendChild(copyButton);
            cont.appendChild(deleteButton);
};

function createButton() {
    copyButton = document.createElement('DIV');
    copyButton.classList.add('copy-button');
    copyButton.onclick = copyFunction;
    copyButton.textContent = "Copy";
    deleteButton = document.createElement('DIV');
    deleteButton.classList.add('delete-button');
    deleteButton.onclick = deleteFunction;
    deleteButton.textContent = "Delete";
}

function createCanvas() {
    myCanvas = document.createElement('CANVAS');
    myCanvas.classList.add('my-canvas');
    myCanvas.width = 128;
    myCanvas.height = 128;
}

window.onload = () => {
    let container = document.createElement('DIV');
    container.classList.add('container');
    document.body.appendChild(container);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    createCanvas();
    myCanvas.onclick = changeFrame;
    container.appendChild(myCanvas);
    createButton();
    container.appendChild(copyButton);
    container.appendChild(deleteButton);

    canvas.onclick = (event) => {
        const ct = myCanvas.getContext('2d');
        const x = event.offsetX;
        const y = event.offsetY;
        const w = Math.floor(x / 20) * 20;
        const h = Math.floor(y / 20) * 20;
        ctx.fillStyle = 'rgb(200,0,0)';
        ctx.fillRect(w, h, 20, 20);
        ct.fillStyle = 'rgb(200,0,0)';
        ct.fillRect(w / 5, h / 5, 4, 4);
    };

    add.onclick = () => {
        container = document.createElement('DIV');
        container.classList.add('container');
        document.body.appendChild(container);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        createCanvas();
        myCanvas.onclick = changeFrame;
        container.appendChild(myCanvas);
        createButton();
        container.appendChild(copyButton);
        container.appendChild(deleteButton);
    };

};
