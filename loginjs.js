function loginval(){
    var Email=document.getElementById("email").value;
    var Password=document.getElementById("pwd").value;
    if(Email==""){
        alert("Please Enter Your EmailId");
         // document.getElementById("msg").innerHTML="enter Your Email Id";
        // document.getElementById("msg").style.color='red';
        return false;
    }
    else if(Password=="")
    {
    alert("Please Enter valid Password");
    // document.getElementById("msg1").innerHTML="enter Your Confirm Password";
    // document.getElementById("msg1").style.color='red';
    return false;
    }
    else
    {
    alert("Success");
    // document.getElementById("msg2").innerHTML="Success";
    // document.getElementById("msg2").style.color='green';
    return false;
    }
}