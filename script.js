let userInput = document.getElementById("userInput");
let result = document.getElementById("result");
let deleteRes = document.getElementById("deleteResult");
let deleteInp = document.getElementById("deleteInput");
let deleteResLast = document.getElementById("deleteResultLast");
let deleteResFirst = document.getElementById("deleteResultFirst");

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
  }
}

function myDeleteLast() {
  deleteResultLast.innerHTML = number.pop();
  deleteResultLast.innerHTML = number;
}

function myDeleteFirst() {
  deleteResultFirst.innerHTML = number.shift();
  deleteResultFirst.innerHTML = number;
}
