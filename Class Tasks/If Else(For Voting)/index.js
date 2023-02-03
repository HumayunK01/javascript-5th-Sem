function vote() {
  var input = document.getElementById("age");
  var result = document.getElementById("ans");

  input.value = parseInt(input.value);
  if (input.value < 18) {
    result.value = "Can't Vote";
  } else {
    result.value = "Can Vote";
  }
}