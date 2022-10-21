function popup(){
    alert("Baby, before clicking ok, I want you to know how " + 
    "much you mean to me. This song will describe a small portion " +
    "of how much I love you. Read the lyrics carefully baby");
}

function myFunction(){
    let input = document.querySelector("#userInput");
    let message = document.querySelector("#message");

    if (userInput.value == "yes" || userInput.value == "Yes" || userInput.value == "YES"){
        message.innerHTML = "I love when you tell me about your days and I always feel so happy being your diary. It completes me when I know you had a good day";
    }
    else if (userInput.value == "no" || userInput.value == "No"){
        message.innerHTML = "ok, maybe tomorrow";
    }
    else{
        message.innerHTML = "Baby, try again";
    }
}