function f2(){
    s = document.getElementById('no').value;
    reg = RegExp('[0-9]');
    if(reg.test(s)){
        alert("Valid Input");
    }
    else{
        alert("Invalid Input");
    }
}