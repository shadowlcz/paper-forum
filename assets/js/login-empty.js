    function check_single()
    {
        if(document.goToPageForm.page.value == "")
        {

            alert("Can not be empty！");
            return false;
        }

        return true;
    }

    function check()
        {
            for(var i=0;i<document.login.elements.length-1;i++)
            {
                if(document.login.elements[i].value=="")
                {
                    alert("当前表单不能有空项");
                    document.login.elements[i].focus();
                    return false;
                }
            }
            return true;}

    function submit1(register){
        if (document.register.username.value=="") {
            alert("请输入内容！");document.register.username.focus();return false;
        }
        return true;}


        function checkForm(form) {
        for (var i = 0; i < form.elements.length; i++) {
            if (form.elements[i].type == "text" && form.elements[i].value == "") {
                //document.write("Fill out ALL fields.");
                //document.form.elements[i].focus();
                alert("当前表单不能有空项");
                return false;
            }
        }
        return true;
    }