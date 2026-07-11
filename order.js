document
.getElementById("orderForm")
.addEventListener("submit",function(e){

e.preventDefault();

alert("🎉 Thank you!\n\nYour HELIOS order has been submitted successfully.\nOur team will contact you shortly.");

this.reset();

});