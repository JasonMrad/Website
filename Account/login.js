const login=document.getElementById("login-form");
const register=document.getElementById("register-form");
const container=document.getElementsByClassName("container");
const loginTab=document.getElementById("login-tab");
const createAccountTab=document.getElementById("createAccount-tab");

function showLoginForm(){
    register.style.display="none";
    login.style.display="block";
    container[0].removeAttribute('style');
    createAccountTab.style.borderBottom = "none"; // Remove border from Create Account tab
    loginTab.style.borderBottom = "2px solid black"; // Add border to Login tab
loginTab.style.fontWeight="bold";
createAccountTab.style.fontWeight="normal";
}
function showRegisterForm(){
    login.style.display="none";
   register.style.display="block";
    container[0].setAttribute('style', 'overflow-y: auto; overflow-x: hidden;max-height:383px;');
    createAccountTab.style.borderBottom = "2px solid black"; // Remove border from Create Account tab
    loginTab.style.borderBottom = "none"; // Add border to Login tab
    loginTab.style.fontWeight="normal";
    createAccountTab.style.fontWeight="bold";
}