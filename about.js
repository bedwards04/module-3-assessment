console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function giveCompliment() {
	alert('You have a great taste in rubber ducks!')
}
const rubberDuck = document.querySelector('img')
rubberDuck.addEventListener('mouseover', giveCompliment);