const playKey = (event) => {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!audio) return; //stops the function if data-key doesn't exist
    audio.currentTime = 0; //rewinds sound each time you press they key
    audio.play();
    key.classList.add('playing');
    key.addEventListener('transitionend', e => e.propertyName !== 'transform' ? '' : key.classList.remove('playing'));
}

window.addEventListener('keydown', playKey);