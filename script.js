const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');


//ADD EVENT
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
})


// DEFINING FUNCTION TO CHECK CORRECT EMAIL FORMAT
const isEmail = (emailVal) => {
    var atSym = emailVal.indexOf("@");  //CHECKS WHETHER @ SYMBOL IS USED OR NOT
    if(atSym < 1)
    return false;
    var dot = emailVal.lastIndexOf(".");  //CHECKS WHETHER . SYMBOL IS USED OR NOT
    if(dot <= atSym+2)
    return false;
    if(dot === emailVal.length-1)
    return false;
    return true;  //RETURNS THE VALUE
}

//DEFINING VALIDATE FUNCTION
const validate = () => {
    const fnameVal = fname.value.trim();
const lnameVal = lname.value.trim();
const phoneVal = phone.value.trim();
const emailVal = email.value.trim();
const passwordVal = password.value.trim();
const cpasswordVal = cpassword.value.trim();


//VALIDATING FIRST NAME
if(fnameVal === ""){ 
    setErrorMsg(fname, 'First Name cannot be blank');
}
else if(fnameVal.length <= 2){
    setErrorMsg(fname, 'First Name minimum 3 characters');
}
else{
    setSuccessMsg(fname);
}


//VALIDATING LAST NAME
if(lnameVal === ""){
    setErrorMsg(lname, 'Last Name cannot be blank');
}
else if(lnameVal.length <= 2){
    setErrorMsg(lname, 'Last Name minimum 3 characters');
}
else{
    setSuccessMsg(lname);
}


//VALIDATING EMAIL
if(emailVal === ""){
    setErrorMsg(email, 'Email cannot be blank');
}
else if(!isEmail(emailVal)){
    setErrorMsg(email, 'Not a valid Email');
}
else{
    setSuccessMsg(email);
}


//VALIDATING PHONE NUMBER
if(phoneVal === ""){
    setErrorMsg(phone, 'Phone number cannot be blank');
}
else if(phoneVal.length !== 10 && phoneVal === "123456789"){
    setErrorMsg(phone, 'Not a valid phone number');
}
else if(phoneVal.length !== 10 && phoneVal !== "123456789"){
    setErrorMsg(phone, 'Phone number should be of 10 digit')
}
else{
    setSuccessMsg(phone);
}


//VALIDATING PASSWORD
if(passwordVal === ""){
    setErrorMsg(password, 'Password cannot be blank');
}
else if(passwordVal.length < 8){
    setErrorMsg(password, 'Very weak. Minimum 8 characters');
}
else if(passwordVal.toUpperCase() === 'PASSWORD'){
    setErrorMsg(password, "Password cannot be 'PASSWORD'");
}
else if(passwordVal.toUpperCase() === fnameVal.toUpperCase() || passwordVal.toUpperCase() === lnameVal.toUpperCase()){
    setErrorMsg(password, 'Cannot be same as first or last name')
}
else if(passwordVal.search(/[A-Z]/)<0)
{
    setErrorMsg(password, 'Must contain atleast 1 uppercase letter.');
}
else if(passwordVal.search(/[a-z]/)<0)
{
    setErrorMsg(password, 'Must contain atleast 1 lowercase letter.');
}
else if(passwordVal.search(/[0-9]/)<0)
{
    setErrorMsg(password, 'Must contain atleast 1 numeric value.');
}
else if(passwordVal.search(/[@#$%&*]/)<0)
{
    setErrorMsg(password, 'Must contain atleast 1 speacial character.');
}
else{
    setSuccessMsg(password);
}


//CONFIRMING THE PREVIOUSLY FEED PASSWORD
if(cpasswordVal === ""){
    setErrorMsg(cpassword, 'Confirm Password cannot be blank');
}
else if(passwordVal !== cpasswordVal){
    setErrorMsg(cpassword, 'Password does not match');
}
else{
    setSuccessMsg(cpassword);
}
}


//DISPLAYING THE APPROPRIATE ERROR MESSAGE
function setErrorMsg(input, errormsg){
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector('small');
    formcontrol.className = "control error";
    small.innerText = errormsg;
}


function setSuccessMsg(input){
    const formcontrol = input.parentElement;
    formcontrol.className = "control success";
}

