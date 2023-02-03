function f1(){
    S = document.getElementById('str').value
    C = count_b(S)
    document.getElementById('cnt').value = C
}

function count_b(S){
    c = 0;
    for(i in S){
        if(S[i] == 'b'){
            c = c + 1;
        }
    }
    return c
}