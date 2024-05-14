
const formEl = document.getElementById("form-el")
let subInput = document.getElementById('input-el')
const user = JSON.parse(localStorage.getItem('userEmail')) ||[] 
formEl.addEventListener('submit', e => {
   e.preventDefault()
   validateInputs()
})
class User {
   constructor(_email){
      this.email = _email
   }
}


const validateInputs = () =>{
   let emailValue = subInput.value.trim()
   const validateEmails = user.some((item) => {
      return item.email === emailValue
   })
   if(emailValue === ""){
      setError(subInput, "Field cannot be empty")
   }
   else if(!checkMailFormat(emailValue)){
      setError(subInput, "Enter a valid Email")
   }
   else{
      if(validateEmails){
         setError(subInput, "Email exist")
      }
      else{
         setSuccess(subInput)
         const newUser = new User(emailValue)
         user.push(newUser)
         localStorage.setItem('userEmail', JSON.stringify(user))
         subInput.value= ""
      } 
   }
}


