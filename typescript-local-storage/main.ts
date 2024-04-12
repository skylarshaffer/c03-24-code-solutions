/* global todos */
import { v4 as uuidv4 } from 'uuid';

interface FormElements extends HTMLFormControlsCollection {
  task: HTMLInputElement;
}

const $todoForm = document.querySelector('#todo-form') as HTMLFormElement;

$todoForm.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  const $formElements = $todoForm.elements as FormElements;
  const todo = {
    todoId: uuidv4(),
    task: $formElements.task.value,
    isCompleted: false,
  };
  todos.push(todo);
  $todoList.appendChild(renderTodo(todo));
  $todoForm.reset();
});

const $todoList = document.querySelector('#todo-list') as HTMLUListElement;

$todoList.addEventListener('change', (event: Event) => {
  const $eventTarget = event.target as HTMLInputElement;
  const todoId = $eventTarget.getAttribute('id');
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].todoId === todoId) {
      todos[i].isCompleted = $eventTarget.checked;
      break;
    }
  }
});

for (let i = 0; i < todos.length; i++) {
  const $todo = renderTodo(todos[i]);
  $todoList.appendChild($todo);
}

function renderTodo(todo: Todo): HTMLLIElement {
  /**
   * <li class="list-group-item">
   *   <div class="form-check d-flex">
   *     <input
   *       type="checkbox"
   *       id="{todo.todoId}"
   *       class="form-check-input">
   *     <label
   *       for="{todo.todoId}"
   *       class="form-check-label flex-grow-1 ml-2">
   *       {todo.task}
   *     </label>
   *   </div>
   * </li>
   */

  const $todo = document.createElement('li');
  $todo.setAttribute('class', 'list-group-item');

  const $formCheck = document.createElement('div');
  $formCheck.setAttribute('class', 'form-check d-flex');

  const $checkbox = document.createElement('input');
  $checkbox.checked = todo.isCompleted;
  $checkbox.setAttribute('id', todo.todoId);
  $checkbox.setAttribute('type', 'checkbox');
  $checkbox.setAttribute('class', 'form-check-input');

  const $label = document.createElement('label');
  $label.setAttribute('for', todo.todoId);
  $label.setAttribute('class', 'form-check-label flex-grow-1 ml-2');
  $label.textContent = todo.task;

  $todo.append($formCheck);
  $formCheck.appendChild($checkbox);
  $formCheck.appendChild($label);

  return $todo;
}
