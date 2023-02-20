const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");


document.addEventListener("input", event =>{

    nameOutput.textContent = nameInput.value;
    if(nameInput.value === "")
        nameOutput.textContent = "Anonymous";
});


