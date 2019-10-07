const panels = document.querySelectorAll('.panel');

function toggleActive(event) {
  if (event.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

function toggleOpen() {
  this.classList.toggle('open');
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));