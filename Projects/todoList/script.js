let inputbox = document.getElementById("inputbox");
let addButton = document.getElementById("addButton");
let Container = document.getElementById("Container");

function inputToList() {
  if (inputbox.value !== "") {
    let data = inputbox.value;

    let listItem = document.createElement("li");
    listItem.innerHTML = `${data} &emsp;  <span class="fas fa-trash"></span>  `;

    Container.appendChild(listItem);
    inputbox.value = "";
  }
}

Container.addEventListener("click", (e) => {
  if (e.target.localName == "li") {
    e.target.classList.add("linethrough");
  } else if (e.target.localName == "span")
    Container.removeChild(e.target.parentNode);
});

document.addEventListener("keypress", (e) => {
  if (e.key == "Enter") inputToList();
});
addButton.addEventListener("click", () => {
  inputToList();
});
