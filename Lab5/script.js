var errorMail = document.createElement('p');
var errorLogin = document.createElement('p');
var errorPass = document.createElement('p');
var errorPass2 = document.createElement('p');
var errorCheck = document.createElement('p');

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
        errorAction("email", 0, errorMail);
        document.getElementById("email").blur();
    } else if(isEmailValid) {
        correctValue("email", errorMail);
    }

    if(!IsLoginValid) {
        errorAction("login", 1, errorLogin);
        document.getElementById("login").blur();
    } else if(IsLoginValid) {
        correctValue("login", errorLogin);
    }

    if(!isPasswordValid) {
        errorAction("pass", 2, errorPass);
        document.getElementById("pass").blur();
    } else if(isPasswordValid) {
        correctValue("pass", errorPass);
    }
    
    if((passwordValue2 != passwordValue) || (passwordValue2 == "")) {
        errorAction("pass2", 3, errorPass2);
        document.getElementById("pass2").blur();
    } else if(passwordValue2 == passwordValue ) {
        correctValue("pass2", errorPass2);
    }

    if(terms.checked == false) {
        errorAction("terms", 4, errorCheck);
    } else if(terms.checked == true) {
        correctValue("terms", errorCheck);
    }

    if ((isEmailValid == true) && (IsLoginValid == true) && (isPasswordValid == true) && 
    (passwordValue2 == passwordValue) && terms.checked == true) {
        window.confirm(`User "${loginValue.toLowerCase()}" has subscribed succesfully`);
        document.getElementsByTagName("form").submit();
        return true;
    }

    return false;
}

function newsletterCheck() {
    var newsletter = document.querySelector("#newsletter") ;
    if (newsletter.checked == true) {
        window.confirm("Accepting newsletter might draw tons of span");
    }
}

function errorAction(inputId, listError, errorName) {
    errorName.textContent = errlistMsg[listError];
    errorName.style = "color:red";
    document.getElementById(inputId).style = "border-color:red";
    document.getElementById(inputId).after(errorName);
}

function correctValue(inputId, errorName) {
    document.getElementById(inputId).style = "border-color:black";
    errorName.remove();
}

var errlistMsg = ["❌ Email address should be non-empty with the format xyx@xyz.xyz", 
"❌ User name should be non-empty , and within 20 characters long."
,"❌ Password should be at least 6 characters: 1 uppercase, 1 lowercase.", 
"❌ Please retype password.", "❌ Please accept terms and conditions"]