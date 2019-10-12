var listElement, inputElement, buttonElement, todos;

listElement = document.querySelector('#app ul.todos-body');
inputElement = document.querySelector('#app input[name="todo-name"]');
buttonElement = document.querySelector('#app input#button');

todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function rendertodos() {
	listElement.innerHTML = '';

	for (todo of todos){
		let todoElement = document.createElement('li');
		let todoText = document.createTextNode(todo);

		let linkElement =  document.createElement('a');
		linkElement.setAttribute('href', '#');
		let linkText = document.createTextNode('Excluir');
		linkElement.appendChild(linkText);

		let pos = todos.indexOf(todo);
		linkElement.setAttribute('onclick', 'deletetodo('+ pos +')');

		todoElement.appendChild(todoText);
		todoElement.appendChild(linkElement);
		listElement.appendChild(todoElement);

	}
}

rendertodos();

function addtodo() {
	
	let todoText = inputElement.value;

	todos.push(todoText);
	inputElement.value = '';
	rendertodos();
	save();
}

buttonElement.onclick = addtodo;


function deletetodo (pos){
	todos.splice(pos, 1);
	rendertodos();
	save();
}


function save() {
	localStorage.setItem('list_todos', JSON.stringify(todos))
}