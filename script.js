document.addEventListener('DOMContentLoaded',()=>{
    const todoForm = document.querySelector('.todo-form');
    const todoList = document.querySelector('.todo-list');
    const todoSubmit = document.querySelector('.todo-submit');
    const todoInput = document.querySelector('.todo-input');
    let editMode = false;
    let editItem = null;

    todoForm.addEventListener('submit',(e)=>{
        e.preventDefault();;
        const todoText = todoInput.value.trim()

        if(todoText !== ''){
            if(editMode){
                editItem.firstChild.textContent = todoText;
                todoSubmit.innerText = 'Add Todo';
                editMode = false;
                editItem = null;
            } else {
                addTodoItem(todoText)
            }
            todoInput.value = '';
        }else{
            alert('Please enter the todo')
        }
    })

    todoList.addEventListener('click',(event)=>{
        const target = event.target;
        console.log(target.tagName);
        if(target.tagName === 'BUTTON'){
            const todoItem = target.parentNode;
            if(target.innerText === '❌'){
                todoItem.remove()
            } else if(target.innerText === '✏️'){
                editMode = true;
                editItem = todoItem
                todoSubmit.innerText = 'Edit Todo'
                todoInput.value = todoItem.firstChild.textContent;
                todoInput.focus();
            }
        }
    })

    function addTodoItem(todoText){
        const todoItem = document.createElement('li');
        const editTodoItem = document.createElement('button');
        const removeTodoItem = document.createElement('button');

        todoItem.innerHTML = `<span>${todoText}</span>`;
        editTodoItem.innerText = '✏️';
        removeTodoItem.innerText = '❌';

        todoItem.appendChild(editTodoItem);
        todoItem.appendChild(removeTodoItem);
        todoList.appendChild(todoItem);
    }

})