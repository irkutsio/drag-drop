const formEl = document.querySelector('.create-form');
const outputEl = document.querySelector('.output');

const handleSubmit = event => {
	event.preventDefault();
	outputEl.textContent = event.currentTarget.input.value.trim();
	event.currentTarget.input.value = '';
};

formEl.addEventListener('submit', handleSubmit);

function allowDrop(ev) {
	ev.preventDefault();
}


function drag(event) {
	console.log(event)
	const selection = document.getSelection().getRangeAt(0);
	const text = selection.toString();

	if (text) {
		event.dataTransfer.setData('text', text);
	}


}

function drop(ev) {
	ev.preventDefault();
	const text = ev.dataTransfer.getData('text');
	if (text) {
		const span = document.createElement('span');
		span.innerText = text;
		span.style.position = 'absolute';
		span.style.left = ev.clientX - ev.target.offsetLeft + 'px';
		span.style.top = ev.clientY - ev.target.offsetTop + 'px';
		ev.target.appendChild(span);
		console.log(span.style.top + ' ' + span.style.left)
	}
}


