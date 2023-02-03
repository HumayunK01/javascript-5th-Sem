function largest() {
  n1 = parseInt(document.getElementById("n1").value);
  n2 = parseInt(document.getElementById("n2").value);
  n3 = parseInt(document.getElementById("n3").value);
  n4 = parseInt(document.getElementById("n4").value);
  n5 = parseInt(document.getElementById("n5").value);

  if (n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5) {
    alert("The largest number is " + n1);
  } else if (n2 > n1 && n2 > n3 && n2 > n4 && n2 > n5) {
    alert("The largest number is " + n2);
  } else if (n3 > n1 && n3 > n2 && n3 > n4 && n3 > n5) {
    alert("The largest number is " + n3);
  } else if (n4 > n1 && n4 > n2 && n4 > n3 && n4 > n5) {
    alert("The largest number is " + n4);
  }
    else if (n1 == n2 && n2 == n3 && n3 == n4 && n4 == n5) {
    alert("All numbers are Equal");
  } else {
    alert("The largest number is " + n5);
  }
}