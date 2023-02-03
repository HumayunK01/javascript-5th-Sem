function Colors() {
  colour = document.getElementById("change").value;
  cv = document.cookie = "bg.color=" + colour + ";";
  arr = cv.split("=");
  // cv.pop()
  document.body.style.backgroundColor = arr[1];
  alert("Cookie Created\n" + arr[1]);
}