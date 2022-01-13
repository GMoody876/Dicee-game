    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;


    var randomDiceImage = "dice" + randomNumber1 + ".png";
    var randomDiceImage2 = "dice" + randomNumber2 + ".png";

    var imageSource = "images/" + randomDiceImage;
    var imageSource2 = "images/" + randomDiceImage2;


    var i1 = document.querySelectorAll("img")[0];

    i1.setAttribute("src" , imageSource);

    var i2 = document.querySelectorAll("img")[1];

    i2.setAttribute("src" , imageSource2);


