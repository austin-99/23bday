function popup(){
    alert("Baby, before clicking ok, I want you to know how " + 
    "much you mean to me. This song will describe a small portion " +
    "of how much I love you. Read the lyrics carefully baby");
}

function myFunction(){
    let input = document.querySelector("#userInput");
    let message = document.querySelector("#message");

    if (userInput.value == "yes"){
        message.innerHTML = "I love how you are so patient with me. You always give me a million chances and I'm so grateful for you.";
    }
    else{
        message.innerHTML = "ok, maybe tomorrow"
    }
}