function Change(v)
{
    with(document.forms.syllabus)
    {
            if(v == "CO5I")
            {
                btn.value = "CO3I"
                sub_list[0].text = 'STE'
                sub_list[1].text = 'EVS'
                sub_list[2].text = 'OSY'
            }
            else
            {
                btn.value = "CO5I"
                sub_list[0].text = 'DMS'
                sub_list[1].text = 'OOP'
                sub_list[2].text = 'DSU'
            }
    }
}