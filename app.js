function popup(){
    alert("Baby, before clicking ok, I want you to know how " + 
    "much you mean to me. This song will describe a small portion " +
    "of how much I love you. Read the lyrics carefully baby");
}

function myFunction(){
    let input = document.querySelector("#userInput");
    let message = document.querySelector("#message");

    if (userInput.value == "yes" || userInput.value == "Yes" || userInput.value == "YES"){
        message.innerHTML = "I love how cute you are when you said that you have to fight the urge to not eat raw batter <br> Also, CONGRATS on finishing your semester baby I'm so happy that you are DONE and now baby can rest. <br> I am so proud of you Lana. The things you accomplish are not easy at all but you make it look easy because of now smart and talented you are";
    }
    else if (userInput.value == "no" || userInput.value == "No"){
        message.innerHTML = "please say yes baby it will make you happier";
    }
    else{
        message.innerHTML = "Baby, try again";
    }
}