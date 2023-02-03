function cal_balance(){
    Total = parseInt(document.forms.fees_rec.TF.value);
    Paid = parseInt(document.forms.fees_rec.PF.value);
    Balance = Total - Paid;
    document.forms.fees_rec.BF.value = Balance;
}

function color(){
    document.forms.fees_rec.BF.style.backgroundColor = "Yellow";
}

function colorA(){
    document.forms.fees_rec.BF.style.backgroundColor = "White";
}