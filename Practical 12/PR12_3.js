function OnlyChar(){
    var a = document.getElementById("IP").value
    var reg = /[0-9{10}]/
     if(reg.test(a)){
        alert("Valid Input");
     }
     else{
        alert("Invalid Input");
     }
}