function popup(){
    alert("Baby, before clicking ok, I want you to know how " + 
    "much you mean to me. This song will describe a small portion " +
    "of how much I love you. Read the lyrics carefully baby");
}

function myFunction(){
    let input = document.querySelector("#userInput");
    let message = document.querySelector("#message");

    if (userInput.value == "yes" || userInput.value == "Yes" || userInput.value == "YES"){
        message.innerHTML = "I love how innocent we were when it came to us trying to flirt at the beginning and not make it too obvious";
    }
    else if (userInput.value == "no" || userInput.value == "No"){
        message.innerHTML = "please say yes baby it will make you happier";
    }
    else{
        message.innerHTML = "Baby, try again";
    }
}