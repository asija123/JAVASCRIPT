const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function AddTask() {
  if (inputbox.value === "") {
    // alert("You must write something!");
    document.querySelector(".error").style.display = "block";
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    document.querySelector(".error").style.display = "none";
  }
  inputbox.value = "";
  savedata();
}

listcontainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("Checked");
      savedata();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savedata();
    }
  },
  false
);

function savedata() {
  localStorage.setItem("data", listcontainer.innerHTML);
}

function showtask() {
  listcontainer.innerHTML = localStorage.getItem("data");
}
showtask();
