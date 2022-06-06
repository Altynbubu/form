const form = document.querySelector(".form");
const input = document.querySelector("#input-todo");
const btn = document.querySelector("button");
const div = document.querySelector(".todo-list");
form.addEventListener("submit", (item) => {
    item.preventDefault();
});
btn.addEventListener("click", () => {
    if (input.value === "") alert("blank sheet");
    else {
        const myList = document.createElement("div");
        myList.classList.add("todo-list");
        div.appendChild(myList);
        myList.style.border = "1px solid black";
        myList.style.textAlign = "center";
        myList.style.gap = "20px";
        myList.innerText = input.value;
        input.value = "";
        myList.addEventListener("click", () => {
            myList.remove();
        });
    }
});