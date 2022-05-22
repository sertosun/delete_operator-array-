let userInput = document.getElementById("userInput");
let result = document.getElementById("result");
let deleteRes = document.getElementById("deleteResult");
let deleteInp = document.getElementById("deleteInput");
let deleteResLast = document.getElementById("deleteResultLast");
let deleteResFirst = document.getElementById("deleteResultFirst");

let papi = document.getElementById("papi");
let list = document.createElement("li");

number = [];

function myAdd() {
  if (userInput.value !== "") {
    number.push(userInput.value);
    result.innerHTML = number.join("-");
    userInput.value = "";
  }
}

function myDelete() {
  if (deleteInp.value !== "") {
    let i = deleteInp.value;
    delete number[i];
    deleteRes.innerHTML = number.join("-");
    deleteInp.value = "";

    papi.appendChild(list);
    list.innerHTML = number;
    console.log(deleteInp.innerText);
    console.log(deleteRes);
  }
}

function myDeleteLast() {
  deleteResultLast.innerHTML = number.pop();
  deleteResultLast.innerHTML = number;

  papi.appendChild(list);
  list.innerHTML = number;
}

function myDeleteFirst() {
  deleteResultFirst.innerHTML = number.shift();
  deleteResultFirst.innerHTML = number;

  papi.appendChild(list);
  list.innerHTML = number;
}
