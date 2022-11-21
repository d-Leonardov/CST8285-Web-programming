/**
var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
var emailValue = document.getElementById("email").value;
var isEmailValid = emailPattern.test(document.getElementById("email").value);
var loginValue = document.getElementById("login").value;
var passwordPattern = /^(?=.{6,}$)(?=.*[a-z])(?=.*[A-Z])/
var passwordValue = document.getElementById("pass").value;
var isPasswordValid = passwordPattern.test(passwordValue);
var passwordValue2 = document.getElementById("pass2").value;
 */

function newsletterCheck() {
    var newsletter = document.querySelector("#newsletter") ;
    if (newsletter.checked == true) {
        window.confirm("Accepting newsletter might draw span");
    }
}

function validate() {
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var emailValue = document.querySelector("#email").value;
    var isEmailValid = emailPattern.test(emailValue);
    var loginPattern = /^[a-zA-Z]{1,20}$/
    var loginValue = document.forms[0].login.value;
    var IsLoginValid = loginPattern.test(loginValue);
    var passwordPattern = /^(?=.{6,}$)(?=.*[a-z])(?=.*[A-Z])/
    var passwordValue = document.querySelector("#pass").value;
    var isPasswordValid = passwordPattern.test(document.forms[0].pass.value);
    var passwordValue2 = document.querySelector("#pass2").value;
    var newsletter = document.querySelector("#newsletter")
    var terms = document.querySelector("#terms");
    

    if(!isEmailValid) {
        errorAction("email", 0);
        document.getElementById("email").focus();
    } 

    if(!IsLoginValid) {
        errorAction("login", 1);
        document.getElementById("login").focus();
    }

    if(!isPasswordValid) {
        errorAction("pass", 2);
        document.getElementById("pass").focus();
    }
    
    if((passwordValue2 != passwordValue) || (passwordValue2 == "")) {
        errorAction("pass2", 3);
        document.getElementById("pass2").focus();
    }

    if(terms.checked == false) {
        errorAction("terms", 4)
    }

    if ((isEmailValid == true) && (IsLoginValid == true) && (isPasswordValid == true) && 
    (passwordValue2 == passwordValue) && terms.checked == true) {
        window.confirm(`User "${loginValue.toLowerCase()}" has subscribed succesfully`);
        document.getElementsByTagName("form").submit();
        return true;
    }

    return false;
}

function errorAction(inputId, listError) {
    var errorElem = document.createElement('p')
    errorElem.textContent = errlistMsg[listError];
    errorElem.style = "color:red";
    document.getElementById(inputId).style = "border-color:red";
    document.getElementById(inputId).after(errorElem);
}


var errlistMsg = ["❌ Email address should be non-empty with the format xyx@xyz.xyz", 
"❌ User name should be non-empty , and within 20 characters long."
,"❌ Password should be at least 6 characters: 1 uppercase, 1 lowercase.", 
"❌ Please retype password.", "❌ Please accept terms and conditions"]

