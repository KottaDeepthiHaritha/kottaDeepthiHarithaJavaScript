function validateForm() {
    var x = document.forms["myForm"]["fn"].value;
    var y = document.forms["myForm"]["ln"].value;
    var pn = document.forms["myForm"]["pn"].value;
    var a = document.forms["myForm"]["email"].value;
    var b = document.forms["myForm"]["pwd"].value; 
    var phoneno= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var mailformat =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var ps="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{0,9}";
    //the password gives first preferences to lowercase,uppercase and numbers  and it should comes first..
    if (x =="") {
        alert("First Name must be filled out");
        return false;
    }
    else if (y=="") {
        alert("Last Name must be filled out");
        return false;
    }
    else if(!(pn.match(phoneno))){
        alert("Enter valid Phone Number");
        return false;
    }
    else if(!(a.match(mailformat))){
        alert("Enter valid emailid");
        return false;
    }  
    else if(!(b.match(ps))){
        alert("Enter valid password");
        return false;
    }
   document.write("<h2><b>You have successfully logged in<b><h2>");
}