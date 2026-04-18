const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

const todos = [];

function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = `todo-item ${todo.completed ? "completed" : ""}`;

    const leftWrap = document.createElement("div");
    leftWrap.className = "todo-left";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.setAttribute("aria-label", `${todo.text} を完了にする`);
    checkbox.addEventListener("change", () => {
      todos[index].completed = checkbox.checked;
      renderTodos();
    });

    const text = document.createElement("span");
    text.className = "todo-text";
    text.textContent = todo.text;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "削除";
    deleteButton.setAttribute("aria-label", `${todo.text} を削除`);
    deleteButton.addEventListener("click", () => {
      todos.splice(index, 1);
      renderTodos();
    });

    leftWrap.append(checkbox, text);
    li.append(leftWrap, deleteButton);
    todoList.append(li);
  });
}

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = todoInput.value.trim();
  if (!text) {
    return;
  }

  todos.unshift({ text, completed: false });
  todoInput.value = "";
  todoInput.focus();

  renderTodos();
});
