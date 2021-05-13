let numberCard = document.getElementById("number");
    userName = document.getElementById("name");
    cardDate = document.getElementById("date");
    cardYear = document.getElementById("year");
    cardTupe = document.getElementById("type");
    cardNubmer = document.getElementById("card_number");
    cardName = document.getElementById("card_name");
    cardMonth = document.getElementById("card_month");
    card_Year = document.getElementById("card_Year");

numberCard.addEventListener("keyup", setNumber);
userName.addEventListener("keydown", setName);
cardDate.addEventListener("mouseup", setData);
cardYear.addEventListener("mouseup", setYear);

function isNum(num){
    return !/[^.[0-9 , " "]]*/.text(num)
}
alert("П")