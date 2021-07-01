function validation(){
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var errors = document.getElementById("errors");
    var text;

    errors.style.padding = "15px";

    if(fullname.length <7){
        text = "Plase Enter Valid Full Name";
        errors.innerHTML = text;
        return false;
    }
    if(email.indexOf("@gmail.com") == -1 || email.length <10){
        text = "Plase Enter Valid Email";
        errors.innerHTML = text;
        return false;
    }
    if(isNaN(phone) || phone.length !=9){
        text = "Plase Enter Valid Phone";
        errors.innerHTML = text;
        return false;
    }
    if(subject.length <=7){
        text = "Plase Enter Valid Subject";
        errors.innerHTML = text;
        return false;
    }
    if(message.length <=100){
        text = "Plase Enter Valid Message";
        errors.innerHTML = text;
        return false;
    }
    alert("Form Is Successfuly");
    return true;

}