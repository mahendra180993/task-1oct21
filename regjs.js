function Validationreg()
  {
    var fullname=document.getElementById("fname").value;
    var mobileNo=document.getElementById("ph").value;
    var mailId=document.getElementById("mail").value;
    var Password=document.getElementById("pwd").value;
    var ConfirmPassword=document.getElementById("cpwd").value;
    var gender=document.getElementsByName("gender");
    var checkbox=document.getElementById("check").checked;
    if(fullname=="")
    {
      alert("Please Enter Your Full Name");
      // document.getElementById("msg").innerHTML="enter Your Full Name";
      // document.getElementById("msg").style.color='red';
      return false;
    }
    else if(mobileNo=="")
    {
      alert("Please Enter Your mobile number in Numbers Only");
      // document.getElementById("msg1").innerHTML="enter Your Mobile Number";
      // document.getElementById("msg1").style.color='red';
      return false;
    }
    else if(mailId=="")
    {
      alert("Please Enter Your Email Id");
      // document.getElementById("msg2").innerHTML="enter Your mail Id";
      // document.getElementById("msg2").style.color='red';
      return false;
    }
    else if(Password=="")
    {
      alert("Please Enter Your Password & Password should be Minimum 8 characters");
      // document.getElementById("msg3").innerHTML="enter Your Password";
      // document.getElementById("msg3").style.color='red';
      return false;
    }
    else if(ConfirmPassword=="")
    {
      alert("Please Confirm your Password");
      // document.getElementById("msg4").innerHTML="enter Your Confirm Password";
      // document.getElementById("msg4").style.color='red';
      return false;
    }
    else if(Password!=ConfirmPassword)
    {
      alert("Password and Confirm Password are Did't Matched");
      // document.getElementById("msg5").innerHTML="Passwords Didnot Matched";
      // document.getElementById("msg5").style.color='red';
      return false;
    }
    else if(!(gender[0].checked || gender[1].checked || gender[2].checked))
    {
      alert("Please Check your Gender");
      // document.getElementById("msg6").innerHTML="Please Select The Gender";
      // document.getElementById("msg6").style.color='red';
      return false;
    }
    else if(checkbox==false)
    {
      alert("Please Check T&C box");
      // document.getElementById("msg7").innerHTML="Accept the Terms and Conditions";
      // document.getElementById("msg7").style.color='red';
      return false;
    }
    else
    {
      alert("Success");
      // document.getElementById("msg8").innerHTML="Success";
      // document.getElementById("msg8").style.color='green';
      return false;
    }
  }