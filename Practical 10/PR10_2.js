function F1() {
  // cname = document.forms.frm.cname.value
  cname = document.getElementById("cname").value;
  var date = new Date();
  var days = 2;
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  var expiry = date.toGMTString();
  document.cookie = "CustomerName=" + cname + ";" + "expires=" + expiry + ";";
  alert("Cookie Created\n" + document.cookie);
  console.log("Cookie Created\n" + document.cookie + expiry + date);
}