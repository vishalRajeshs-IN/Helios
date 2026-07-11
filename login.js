document.getElementById("loginForm").addEventListener("submit",function(e){

e.preventDefault();

const device=document.getElementById("device").value;

const password=document.getElementById("password").value;

if(device===""||password===""){

alert("Please fill all fields");

return;

}

alert("Welcome to HELIOS!");

});
function sendFaultEmail(){

emailjs.send("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",{

user_name:"Vishal",

device_id:"PV-05-060806",

voltage:"170 V",

current:"6.5 A",

message:"Fault detected in Solar Monitoring System."

}).then(function(){

console.log("Email Sent Successfully");

});

}