function f1(){
    s = document.getElementById('fname').value;
    reg = / A-Z | a-z | /d;
    if(reg.test(s)){
        alert("Valid Input");
    }
    else{
        alert("Invalid Input")
    }
}