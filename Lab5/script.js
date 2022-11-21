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

var emailPattern2 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
var emailValue2 = document.forms[0].email.value;
var isEmailValid2 = emailPattern2.test(emailValue2);
var loginValue2 = document.forms[0].login.value;
var passwordPattern2 = /^(?=.{6,}$)(?=.*[a-z])(?=.*[A-Z])/
var passwordValue2 = document.forms[0].pass.value;
var isPasswordValid2 = passwordPattern2.test(passwordValue2);
var passwordValue3 = document.getElementById("pass2").value;



/**
function validate() {
  
    if(document.getElementById("email").value.sear== emailPattern ) {
        //alert (isEmailValid);
        alert (document.getElementById("email").value);
        validation("email", 0);
        document.getElementById("email").focus();
        return false;
    } 
    
    if(document.getElementById("login").innerHTML.length > 2) {
        validation("login", 1);
        document.getElementById("login").focus();
        
    } 

    if(!isPasswordValid2) {
        validation("pass", 2);
        document.getElementById("pass").focus();
        
    }
    
    if (passwordValue3 != passwordValue2) {
        validation("pass2", 2);
        document.getElementById("pass2").focus();
    }

    //return false;

    else {
        return false;
    }
    
}
 */

function validate2() {
    
    alert (isEmailValid2);
    alert (isPasswordValid2);
    
    if(!isEmailValid2) {
        validation("email", 0);
        document.getElementById("email").focus();
               
    } 
    
    if((document.forms[0].login.value.length > 20) || (document.forms[0].login.value == "")) {
        validation("login", 1);
        document.getElementById("login").focus();
    } 

    if(!isPasswordValid2) {
        validation("pass", 2);
        document.getElementById("pass").focus();
        
    }
    
    if (passwordValue3 == passwordValue2) {
        validation("pass2", 2);
        document.getElementById("pass2").focus();
        return false;
    }

    //return false;

    else {
        return true;
    }
}

function validation(inputId, listError) {
     var errorElem = document.createElement('p')
     errorElem.textContent = errlistMsg[listError];
     errorElem.style = "color:red";
     document.getElementById(inputId).style = "border-color:red";
     document.getElementById(inputId).after(errorElem);
}

/**
function validation2(_inputName, listError) {
    var errorElem = document.createElement('p')
    errorElem.textContent = errlistMsg[listError];
    errorElem.style = "color:red";
    document.forms[0].inputName.style = "border-color:red";
    document.forms[0].inputName.style.after(errorElem);
}
 */

/**
 * test function

function testValidate() {
    //test("email", 0);
    alert (document.getElementById("email").value);
    
}

function test(x,listError ) {
    var errorElem = document.createElement('p')
    errorElem.textContent = errlistMsg[listError];
    alert (errorElem.value);
    errorElem.style = "color:red";
    document.getElementById(x).style = "border-color:red";
    document.getElementById(x).after(errorElem);
    
}
**/

var errlistMsg = ["X Email address should be non-empty with the format xyx@xyz.xyz", "X User name should be non-empty , and within 20 characters long."
,"X Password should be at least 6 characters: 1 uppercase, 1 lowercase.", "X Password should be at least 6 characters: 1 uppercase, 1 lowercase.",
"X Please retype password." ]