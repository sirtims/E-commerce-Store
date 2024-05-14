// const contactBtn = document.getElementById("contact-btn")
const fullName = document.getElementById("Full-name")
const emailEl = document.getElementById("email")
const form = document.getElementById("form")
form.addEventListener('submit',  e =>{
   e.preventDefault()
   contact()
   
})
// function responsible for sending the email
function sendEmail(){
   Email.send({
      Host : "smtp.elasticemail.com",
      Username : "omafetimothyameh@gmail.com",
      Password : "37D26B673E5A203CD5D1DC40EB46A63885A2",
      To : "omafetimothyameh@gmail.com",
      From : "omafetim@gmail.com",
      Subject : "New Contact Form Enquiry",
      Body :"come",
   }).then(
      message => alert(message)
   )
}

// function responsible for validating the input field when button is plessed
const contact = () => {
   let fullnameValue = fullName.value.trim()
   let emailValue = emailEl.value.trim()
   if (fullnameValue === ""){
      setError( fullName, "Name Field cannot be empty")
   }
   else if(fullnameValue.length < 6){
      setError( fullName, "Field's length must be greater than 5")
   }
   else{
      setSuccess(fullName)
      if(emailValue === ""){
         setError( emailEl, "Email Field cannot be empty")
      }
      else if(!checkMailFormat(emailValue)){
         setError( emailEl, "Invalid email format")
      }
      else{
         setSuccess(emailEl)
         fullName.value= ""
         emailEl.value= ""
         sendEmail()
      } 
   }
  
}




