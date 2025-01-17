const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullButton = player.querySelector('.fullscreen');

const togglePlay = () => (video.paused ? video.play() : video.pause());

function updateButton() {
	const icon = this.paused ? '►' : '▮▮';
	toggle.textContent = icon;
}

function skip() {
	video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
	video[this.name] = this.value;
}

function handleProgress() {
	const percent = video.currentTime / video.duration * 100;
	progressBar.style.flexBasis = `${percent}%`;
}

function scrub(event) {
	const scrubTime = event.offsetX / progress.offsetWidth * video.duration;
	video.currentTime = scrubTime;
	console.log(event);
}

function toggleFullScreen() {
	video.requestFullscreen();
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach((button) => button.addEventListener('click', skip));

ranges.forEach((range) => range.addEventListener('input', handleRangeUpdate));

let isMouseDown = false;

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (event) => isMouseDown && scrub(event));
progress.addEventListener('mousedown', () => (isMouseDown = true));
progress.addEventListener('mouseup', () => (isMouseDown = false));

fullButton.addEventListener('click', toggleFullScreen);
