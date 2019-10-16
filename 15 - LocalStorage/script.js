const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const checkAllBtn = document.querySelector('#check-all');
const checkNoneBtn = document.querySelector('#check-none');
const clearListBtn = document.querySelector('#clear-list');
let items = JSON.parse(localStorage.getItem('items')) || [];

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
checkAllBtn.addEventListener('click', checkAll);
checkNoneBtn.addEventListener('click', checkNone);
clearListBtn.addEventListener('click', clearList);

function addItem(event) {
	const text = this.querySelector('[name=item]').value;
	const item = {
		text: text,
		done: false
	};
	items.push(item);
	populateList(items, itemsList);
	localStorage.setItem('items', JSON.stringify(items));
	this.reset();
	event.preventDefault();
}

function populateList(plates = [], platesList) {
	platesList.innerHTML = plates
		.map((plate, index) => {
			return `
      <li>
        <input type='checkbox' data-index=${index} id='item${index}' ${plate.done ? 'checked' : ''} />
        <label for="item${index}">${plate.text}</label>
      </li>
    `;
		})
		.join('');
}

function toggleDone(event) {
	if (!event.target.matches('input')) return;
	const el = event.target;
	const index = el.dataset.index;
	items[index].done = !items[index].done;
	localStorage.setItem('items', JSON.stringify(items));
	populateList(items, itemsList);
}

function checkAll() {
	items.forEach((item) => {
		item.done = true;
	});
	localStorage.setItem('items', JSON.stringify(items));
	populateList(items, itemsList);
}

function checkNone() {
	items.forEach((item) => {
		item.done = false;
	});
	localStorage.setItem('items', JSON.stringify(items));
	populateList(items, itemsList);
}

function clearList() {
	items = [];
	localStorage.clear();
	populateList(items, itemsList);
}

populateList(items, itemsList);
