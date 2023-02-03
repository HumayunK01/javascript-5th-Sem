function f1(){
    txt = document.getElementById('ip').value
    document.cookie = "firstname=" + txt +";"
    alert("Cookie Written");
}