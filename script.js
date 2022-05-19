let userInput = document.getElementById("userInput");
let result = document.getElementById("result");
//let deleteRes = document.getElementById("deleteResult");
//let deleteInp = document.getElementById("deleteInput");

number = [];

function myAdd() {
  if (userInput.value !== "") {
    number.push(userInput.value);
    result.innerHTML = number.join("-");
    userInput.value = "";
  }
}

function myDelete() {
  if (deleteInput.value !== "") {
    let i = deleteInput.value;
    delete number[i];
    deleteResult.innerHTML = number.join("-");
    deleteInput.value = "";
  }
}
