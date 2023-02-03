function prepare_b4(){
    with(document.forms.contact){
        if(fname.value.length > 0 && lname.value.length > 0){
                email.value = fname.value + lname.value.charAt(0) + "@arkp.com";
            }
        else{
            alert("Enter Valid Data");
        }
    }
}