const setError = (element, message)=>{
  const inputControl = element.parentElement
  const errorDisplay =inputControl.querySelector(".input-error-message")
  errorDisplay.textContent = message
  inputControl.classList.add("error")
  inputControl.classList.remove("success")
}
const setSuccess = element => {
  const inputControl = element.parentElement
  const errorDisplay =inputControl.querySelector(".input-error-message")
  errorDisplay.textContent = ""
  inputControl.classList.remove("error")
  inputControl.classList.add("success")
}
const checkMailFormat = email => {
   const required =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)(\.\w{2,3})+$/
   return required.test(String(email).toLowerCase())
}