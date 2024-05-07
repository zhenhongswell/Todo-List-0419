let listState = [];
const STATE_KEY = "todo-list";
function loadState() {
  const listState = localStorage.getItem(STATE_KEY);
  if (listState !== null) {
    return JSON.parse(listState);
  }
  return [];
}
function saveState(list) {
  const value = JSON.stringify(list);
  localStorage.setItem(STATE_KEY, value);
}

function initList() {
  //load State
  listState = loadState();
  //render list
  const ul = document.getElementById("list");
  for (const item of listState) {
    const li = document.createElement("li");
    li.textContent = item.inputText;
    li.classList.add("item");
    li.onclick = checkItem;
    const deleteButton = document.createElement("span");
    deleteButton.classList.add("delete");
    // deleteButton.onclick = deleteItem;
    deleteButton.addEventListener("click", (e) => {
      console.log(e.currentTarget);
      deleteItem(e.currentTarget);
    });

    li.appendChild(deleteButton);
    if (item.checked) {
      li.classList.add("checked");
    }

    ul.appendChild(li);
  }
}

function addItem() {
  const list = document.querySelector(".list");
  const input = inputWrapper.querySelector("#input");
  const inputText = input.value;

  if (inputText === "") {
    alert("you must enter some text! before press the add button.");
    return;
  }
  const newItem = document.createElement("li");
  newItem.textContent = inputText;
  newItem.classList.add("item");
  newItem.onclick = checkItem;
  const deleteButton = document.createElement("span");
  deleteButton.classList.add("delete");
  // deleteButton.onclick = deleteItem;
  deleteButton.addEventListener("click", (e) => {
    e.stopPropagation();
    deleteItem(e.currentTarget);
  });

  newItem.appendChild(deleteButton);

  listState.push({
    inputText: inputText,
    checked: false,
  });
  saveState(listState);

  // append to list
  input.value = "";
  list.appendChild(newItem);
}

function checkItem() {
  const item = this;
  const parent = item.parentNode;
  const index = Array.from(parent.childNodes).indexOf(item);
  listState[index].checked = !listState[index].checked;
  saveState(listState);
  item.classList.toggle("checked");
}
function deleteItem(currentTarget) {
  const item = currentTarget.parentElement;
  const list = item.parentElement;
  const index = Array.from(list.childNodes).indexOf(item);
  // remove one ,using index
  listState = listState.filter((value, i) => {
    return i !== index;
  });
  //   listState.splice(index, 1);
  saveState(listState);
  list.removeChild(item);
}

initList();

const container = document.querySelector(".container");
const inputWrapper = container.querySelector(".input-wrapper");
const addButton = inputWrapper.querySelector("#add-button");

addButton.addEventListener("click", () => {
  addItem();
});

const form = document.querySelector(".input-wrapper");
form.addEventListener("click", (e) => {
  // prevent page refresh after clicked
  e.preventDefault();
});
