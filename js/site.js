function CheckString() {
  let userStr = document.getElementById("textField").value.toLowerCase();
  userStr = userStr.split(" ").join("");
  let arr = userStr.split("");
  arr = arr.reverse();
  let revStr = arr.join("");
  let resultForm = document.getElementById("result");
  resultForm.classList.remove("invisible");
  if (userStr == revStr) {
    resultForm.getElementsByTagName("h2")[0].innerHTML = "Is a palindrome!";
  } else {
    resultForm.getElementsByTagName("h2")[0].innerHTML = "Not a palindrome!";
  }
}

function Hide() {
  document.getElementById("result").classList.add("invisible");
}
