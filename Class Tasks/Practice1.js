function active_inactive(v) {
  with (document.forms.info) {
    if (v == "InActive") {
      btn.value = "Active";
      cust_id.disabled = true;
      amount.readOnly = true;
    } else {
      btn.value = "InActive";
      cust_id.disabled = false;
      amount.readOnly = false;
    }
  }
}

function CUST(j) {
  with (document.forms.info) {
    if (j == "Employee") {
      fn.value = "Abdullah";
      ln.value = "Mulla";
      cust_id.value = "E101";
      amount.value = "20,000";
    } else {
      fn.value = "Humayun";
      ln.value = "Khan";
      cust_id.value = "C101";
      amount.value = "10,000";
    }
  }
}