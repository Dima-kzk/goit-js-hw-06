const validationInput = document.getElementById("validation-input");

const dataLength = Number(validationInput.dataset.length);

validationInput.addEventListener("blur", () => {

    const {value, classList} = validationInput;
    
    if(value.length === dataLength){
        if(classList.contains("invalid"))
            classList.remove("invalid");

        if(!classList.contains("valid"))
            classList.add("valid");
        
    }
    else{
        if(classList.contains("valid"))
            classList.remove("valid");

        if(!classList.contains("invalid"))
            classList.add("invalid");
    }

    if(validationInput.value.length === 0){
        if(classList.contains("invalid"))
            classList.remove("invalid");
        
        if(classList.contains("valid"))
            classList.remove("valid");
    }
});