    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const activeTodosList = document.getElementById('active-todos');
    const completedTodosList = document.getElementById('completed-todos');
    const deletedTodosList = document.getElementById('deleted-todos');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const todoText = todoInput.value.trim();
        if (todoText === '') return; // Prevent empty todos
        addTodoItem(todoText);
        todoInput.value = '';
    });

    function addTodoItem(todoText) {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        todoItem.innerHTML = `
            <span>${todoText}</span>
            <div class="todo-item-actions">
                <button class="complete-button">Complete</button>
                <button class="delete-button">Delete</button>
            </div>
        `;
        
        const completeButton = todoItem.querySelector('.complete-button');
        completeButton.addEventListener('click', function() {
            completeTodoItem(todoItem);
        });

        const deleteButton = todoItem.querySelector('.delete-button');
        deleteButton.addEventListener('click', function() {
            deleteTodoItem(todoItem);
        });

        activeTodosList.appendChild(todoItem);
    }

    function completeTodoItem(todoItem) {
        todoItem.classList.toggle('todo-item-complete');
        const isCompleted = todoItem.classList.contains('todo-item-complete');
        if (isCompleted) {
            completedTodosList.appendChild(todoItem);
        } else {
            activeTodosList.appendChild(todoItem);
        }
    }

    function deleteTodoItem(todoItem) {
        todoItem.classList.add('todo-item-deleted');
        todoItem.querySelector('.todo-item-actions').remove();
        deletedTodosList.appendChild(todoItem);
    }
