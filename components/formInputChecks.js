
export function checkNameInput(input, errorObj){
    console.log("checkname",input);
    if (!input) {
      errorObj = 'Name is required';
      return errorObj
    } else if (input.length < 3) {
      errorObj = 'Name is too short';
      return errorObj
    } else if (input.length > 50) {
      errorObj = 'Name is too long';
      return errorObj
    }
  }
  
 export function checkEmailInput(input,errorObj){
    if (!input) {
      
      errorObj = 'Email is required'; 
      
  }
  else if (input.length < 3) {
    errorObj = 'Name is too short';
   
  }
   // Check if email address is valid
   let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   if (!regex.test(input)) {
     errorObj =  `${errorObj} and Invalid email address`;
   
   }
  
   return errorObj
  
  }
  export function checkMessageInput(input, errorObj){
    if (!input) {
      
      errorObj = 'Message is required'; 
      
  }
  else if (input.length < 3) {
    errorObj = 'Message is too short';
   
  }
  
  
  
   return errorObj
  }


