function popup(){
    alert("Baby, before clicking ok, I want you to know how " + 
    "much you mean to me. This song will describe a small portion " +
    "of how much I love you. Read the lyrics carefully baby");
}

function myFunction(){
    let input = document.querySelector("#userInput");
    let message = document.querySelector("#message");

    if (userInput.value == "yes" || userInput.value == "Yes" || userInput.value == "YES"){
        message.innerHTML = "I love it when you send me the songs you love. I get to focus on the lyrics and instrumentals and it makes me fall deeper in love with you";
    }
    else if (userInput.value == "no" || userInput.value == "No"){
        message.innerHTML = "ok, maybe tomorrow";
    }
    else{
        message.innerHTML = "Baby, try again";
    }
}