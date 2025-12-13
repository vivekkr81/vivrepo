const myTodoListContainer = document.querySelector(".myTodoList");
const taskNameInput = document.querySelector(".taskNameInput");
const taskContentInput = document.querySelector(".taskContentInput");
const addBtn = document.querySelector(".addBtn");
const form1 = document.querySelector('.form1');
const form2 = document.querySelector('.form2');

let mytodolist = [];

function display() {
    mytodolist = JSON.parse(localStorage.getItem("mytodolist")) || [];

    myTodoListContainer.innerHTML = '<h1>MY Todo Tasks</h1>'
    mytodolist.forEach((mytodo, index) => {
        const container = document.createElement("div")
        container.classList.add("myTodoListInner")
        container.innerHTML = `<h2>${mytodo.name}</h2> <P>${mytodo.content}</P>`

        const btn = document.createElement("button");
        btn.textContent = "Delete";
        btn.onclick = () => {
            mytodolist.splice(index, 1);
            localStorage.setItem("mytodolist", JSON.stringify(mytodolist))
            display()
        }
        container.append(btn);
        myTodoListContainer.append(container)
    });

    if (mytodolist.length >= 3) {
        const deletAll = document.createElement("button");
        deletAll.textContent = 'Delete All';

        deletAll.onclick = () => {
            localStorage.removeItem("mytodolist");
            deletAll.remove();
            display();
        }
        myTodoListContainer.append(deletAll)
    }
}
addBtn.onclick = () => {
    const name = taskNameInput.value;
    const content = taskContentInput.value;
    mytodolist.push({ name, content });
    form1.reset()
    form2.reset()
    localStorage.setItem("mytodolist", JSON.stringify(mytodolist));
    display();
}
display();