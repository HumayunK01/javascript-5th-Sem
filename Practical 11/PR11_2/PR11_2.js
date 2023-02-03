function shop_form(a,b,c){
    if(a.checked == true && b.checked == true && c.checked == true){
        no_win = 3;
    }
    else if(a.checked == true && b.checked == true && c.checked == false){
        no_win = 2;
    }
    else if(a.checked == true && b.checked == false && c.checked == true){
        no_win = 2;
    }
    else if(a.checked == false && b.checked == true && c.checked == true){
        no_win = 2;
    }
    else if(a.checked == false && b.checked == false && c.checked == true){
        no_win = 1;
    }
    else if(a.checked == true && b.checked == false && c.checked == false){
        no_win = 1;
    }
    else if(a.checked == false && b.checked == true && c.checked == false){
        no_win = 1;
    }
    else if(a.checked == true && b.checked == true && c.checked == false){
        no_win = 2;
    }
    else{
        no_win = 0;
    }
}