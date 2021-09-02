let test = document.querySelector('#test');

let questions = [
	{
		text: 'Название корабля, на котором оказывается Нео?',
		right: 'Навуходоносор',
	},
	{
		text: 'Как зовут программу-создателя Матрицы?',
		right: 'Архитектор',
	},
	{
		text: 'Кто произносит эту культовую фразу:  "Вы все живёте в мире грёз."?',
		right: 'Морфеус',
	},
];


for (let question of questions) {
	let div = document.createElement('div');
	test.appendChild(div);
	
	let p = document.createElement('p');
	p.innerHTML = question.text;
	div.appendChild(p);
	
	let input = document.createElement('input');
	input.dataset.right = question.right;
	div.appendChild(input);
}

let button = document.querySelector('#button');
button.addEventListener('click', function() {
	let inputs = document.querySelectorAll('#test input');
	
	for (let input of inputs) {
		input.classList.remove('correct');
		input.classList.remove('incorrect');
		
		if (input.value == input.dataset.right) {
			input.classList.add('correct');
		} else {
			input.classList.add('incorrect');
		}
	}
});