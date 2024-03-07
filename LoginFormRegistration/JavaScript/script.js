let form = document.querySelector("form"),
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");

form.onsubmit = (e) => {
    e.preventDefault(); // preventing form from submitting.
    if(eInput.value === ""){ // if email is empty.
        eField.classList.add("shake", "error");
    } else{
        emailCheck();
    };
    if(pInput.value === ""){ // if password is empty.
        pField.classList.add("shake", "error");
    };

    setTimeout(() =>{ // remove shake class after 500ms.
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    }, 500);

    eInput.onkeyup = () => {
     emailCheck();   
    };
    function emailCheck(){
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // pattern to valid email.
        if(!eInput.value.match(pattern)){ //if pattern not match with user entered value
            eField.classList.add("error");
            let errText = eField.querySelector(".error-text");
            (eInput.value !== "") ? errText.innerText = "Enter a valid email address ...." : errText.innerText = "Email can't be blank" 
        } else{
            eField.classList.remove("error");
        };
    };

    pInput.onkeyup = () => {
        if(pInput === ""){ //if password is empty.
            pField.classList.add("error");
        } else{
            pField.classList.remove("error");
        };
    };
        
    // if "error" class not contains in eField and pField then user has entered proper details.
    if(!eField.classList.contains("error") && !pField.classList.contains("error")){
        window.location.href = "#" // remove "#" and put that url where you want to submit the form data.
        console.log("Form submitted!");
    };
};