var email = document.getElementById("email");

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    console.log(email)
    return re.test(email);
}

function validate(){
    let error = document.getElementById("error")
    if(validateEmail(email.value) == false){
        error.style.display = "block"
    }else{
        error.style.display = "none"
    }
}

function preventSubmit() {
    const form = document.getElementById("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
}