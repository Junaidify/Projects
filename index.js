let addBtn = document.getElementById("add_btn");

function addBtnClick() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        let taskBox = document.createElement("p");
        taskBox.id = "taskName";
        taskBox.innerText = `Title: ${item.title}`;
        taskBox.style.color = "blue";
        document.body.append(taskBox);
      });
    })
    .catch((error) => console.log(error));
}

addBtn.addEventListener("click", addBtnClick);
