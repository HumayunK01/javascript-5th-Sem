function greet() {
  time = document.getElementById("t");
  time_v = parseInt(time.value);

  if (time_v >= 0 && time_v < 12) {
    document.getElementById("m").value = "Good Morning";
  } else if (time_v >= 12 && time_v < 16) {
    document.getElementById("m").value = "Good Afternoon";
  } else {
    document.getElementById("m").value = "Good Night";
  }
}