const inputs = document.querySelectorAll('.controls input'),
      rootStyle = document.documentElement.style;

function updateProps() {
    const suffix = this.dataset.sizing || '';
    rootStyle.setProperty(`--${this.name}`, `${this.value}${suffix}`);
} 

inputs.forEach(input => input.addEventListener('input', updateProps));