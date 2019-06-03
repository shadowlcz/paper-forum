
function validate() {
    var pwd1 = document.getElementById("password").value;
    var pwd2 = document.getElementById("repassword").value;
    if(pwd1 == pwd2) {
        document.getElementById("tishi").innerHTML="<font color='gray'>输入正确</font>";
/*         $("#tishi").hide(1500); */
        document.getElementById("dosubmit").disabled = false;
    }
    else {
      document.getElementById("tishi").innerHTML="<font color='red'>两次密码不相同</font>";
      document.getElementById("dosubmit").disabled = true;
    }
