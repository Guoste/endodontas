"use strict";

const circleContainer = document.querySelector(".circle-container");

document.querySelectorAll(".circle-container-element").forEach(function(element){
element.addEventListener("mouseover", function(){
    let pictureNumber =  Math.floor(Math.random() * 6);
    circleContainer.style.backgroundImage = `url(img/Icy${pictureNumber}.png)`; 
})
element.addEventListener("mouseout", function(){
    circleContainer.style.backgroundImage = "url(img/tooth_big.png)";
})

});


