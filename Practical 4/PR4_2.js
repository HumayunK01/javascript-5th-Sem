function odd(){
    s = parseInt(document.getElementById('min').value);
    e = parseInt(document.getElementById('max').value);
    c = count_odd(s,e);
    document.getElementById('cnt').value = cnt;
}

function count_odd(){
    cnt = 0;
    for(i = s; i <= e; i ++){
        if(i%2 != 0){
            cnt = cnt + 1;
        }
    }
    return cnt;
}