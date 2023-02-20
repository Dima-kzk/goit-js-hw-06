const loginFormEl = document.querySelector("form.login-form");


loginFormEl.addEventListener("submit", (event)=>{
    
    event.preventDefault();

    const {elements: 
        {
            email: {value: email}, 
            password: {value: password}
        }
    } = loginFormEl;

    if(email.length === 0 || password.length === 0){
        alert("Повинні бути заповнені всі поля");
        return;
    }

    const persone = {email, password};
    console.log(persone);

    loginFormEl.reset();
});