const pressed = [];
const secretCode = 'wesbos';

window.addEventListener('keyup', (event) => {
	pressed.push(event.key);
	pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
	if (pressed.join('').includes(secretCode)) {
		console.log('you found the secret code!');
		cornify_add();
	}
	console.log(pressed);
});
