// select html tag with the canvas prop and create controller in 2d
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

// make the canvas the size of the browser window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// define stroke props
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

// flag for when mouse is being clicked
let isDrawing = false;

// coords for when you were then you clicked down and cliked up
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(event) {
	if (!isDrawing) return;
	console.log(event);
	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
	ctx.beginPath();
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(event.offsetX, event.offsetY);
	ctx.stroke();
	[ lastX, lastY ] = [ event.offsetX, event.offsetY ];
	hue++;
	if (hue >= 360) hue = 0;
	if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) direction = !direction;
	if (direction) {
		ctx.lineWidth++;
	} else {
		ctx.lineWidth--;
	}
}

// click and drag functionality
window.addEventListener('mousemove', draw);
window.addEventListener('mousedown', () => {
	isDrawing = true;
	[ lastX, lastY ] = [ event.offsetX, event.offsetY ];
});
window.addEventListener('mouseup', () => (isDrawing = false));
window.addEventListener('mouseout', () => (isDrawing = false));
