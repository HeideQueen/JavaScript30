const divs = document.querySelectorAll('div');

function logText(e) {
	e.stopPropagation();
	console.log(this.classList.value);
}

divs.forEach((e) => e.addEventListener('click', logText, { capture: false }));
