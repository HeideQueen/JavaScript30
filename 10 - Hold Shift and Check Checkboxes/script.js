const checkboxes = document.querySelectorAll('.inbox [type="checkbox"]');

let lastChecked;

function handleEvent(event) {
	let inBetween = false;
	if (event.shiftKey && this.checked) {
		checkboxes.forEach((checkbox) => {
			if (checkbox === this || checkbox === lastChecked) {
				inBetween = !inBetween;
			}
			if (inBetween) {
				checkbox.checked = true;
			}
		});
	}
	lastChecked = this;
}

checkboxes.forEach((checkbox) => checkbox.addEventListener('click', handleEvent));
