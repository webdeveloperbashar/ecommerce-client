const emailValidate = (email) =>{
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return re.test(email)
}

const Validate = (fields) => {
    let error = {};
    for (const field in fields) {
        const currentField = fields[field]
        if(currentField.required && currentField.value === ""){
            error[field] = 'Field must be fill up'
        }
        if(!error[field] && currentField.email && !emailValidate(currentField.value)){
            error[field] = 'Invalid email'
        }
        if(!error[field] && currentField.minLength && currentField.value.trim().length < currentField.minLength){
            error[field] = `This field must be at least ${currentField.minLength} charectars`
        }
        
    }
    return error;
};

export default Validate;