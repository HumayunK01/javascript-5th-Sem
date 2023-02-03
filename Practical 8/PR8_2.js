function f1()
{
    s=document.forms.frm2.s1
    for(i=0;i<s.options.length;i++)
    {
        s.removeChild(s.options[i])
    }
    ch1=document.forms.frm2.CO3I;
    ch2=document.forms.frm2.CO5I;
    if(ch1.checked==true && ch2.checked==true)
    {
        op1=document.createElement("option");
        op1.text=ch1.value;
        op2=document.createElement("option");
        op2.text=ch2.value;
        document.forms.frm2.s1.appendChild(op1);
        document.forms.frm2.s1.appendChild(op2);
    }
    else if(ch1.checked==true && ch2.checked==false)
    {
        op1=document.createElement("option");
        op1.text=ch1.value;
        document.forms.frm2.s1.appendChild(op1);
    }
    else if(ch1.checked==false && ch2.checked==true)
    {
        op1=document.createElement("option");
        op1.text=ch2.value;
        document.forms.frm2.s1.appendChild(op1);
    }
}