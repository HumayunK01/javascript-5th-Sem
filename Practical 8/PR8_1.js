function f1() {
  msg = "";
  with (document.forms.frm) {
    if (Sam.checked == true) {
      msg = msg + " " + Sam.value;
    }
    if (Sameer.checked == true) {
      msg = msg + " " + Sameer.value;
    }
    if (Rohit.checked == true) {
      msg = msg + " " + Rohit.value;
    }
    if (Saif.checked == true) {
      msg = msg + " " + Saif.value;
    }
    if (Rohan.checked == true) {
      msg = msg + " " + Rohan.value;
    }
  }
  alert(msg);
}
