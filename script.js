const container = document.querySelector(".container");
const inputWrapper = container.querySelector(".input-wrapper");
const addButton = inputWrapper.querySelector("#add-button");

function deleteItem() {}
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
  //   newItem.addEventListener("click", () => {
  //     checkItem(newItem);
  //   });
  //  delete button
  const deleteButton = document.createElement("span");
  deleteButton.classList.add("delete");
  deleteButton.onclick = deleteItem;
  //   deleteButton.addEventListener("click", () => {
  //     deleteItem(newItem);
  //   });

  newItem.appendChild(deleteButton);
  // append to list
  input.value = "";
  list.appendChild(newItem);
}

function checkItem() {
  const item = this;
  console.log(this);
  item.classList.toggle("checked");
}
function deleteItem() {
  console.log(this.parentElement);
  const item = this.parentElement;
  const list = item.parentElement;
  list.removeChild(item);
  //   this.parentElement.removeChild();
}

addButton.addEventListener("click", () => {
  addItem();
});

const form = document.querySelector(".input-wrapper");
form.addEventListener("click", (e) => {
  e.preventDefault();
});
