function f1() {
  pass = document.forms.frm.pass.value;
  document.cookie = "password=" + pass + ";";
  alert("Password Saved As A Cookie");
}