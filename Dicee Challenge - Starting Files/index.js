
document.querySelector("button").addEventListener("click",function1);
function function1(){
    var randomNumber1= Math.floor(Math.random()*6 +1);
var randomNumber2= Math.floor(Math.random()*6 +1);
var randomNumber3= Math.floor(Math.random()*6 +1);
var randomNumber4= Math.floor(Math.random()*6 +1);
var randomDiceImage1= "./images/dice" + randomNumber1 + ".png";
var randomDiceImage2= "./images/dice" + randomNumber2 + ".png";
var randomDiceImage3= "./images/dice" + randomNumber3 + ".png";
var randomDiceImage4= "./images/dice" + randomNumber4 + ".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage1 );
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2 );
var image3=document.querySelectorAll("img")[2];
image3.setAttribute("src", randomDiceImage3 );
var image4=document.querySelectorAll("img")[3];
image4.setAttribute("src", randomDiceImage4 );
var a=randomNumber1+randomNumber2;
var b=randomNumber3+randomNumber4;

if(a>b){
    var heading=document.querySelector("h1");
    heading.innerHTML="You Loose";
    var color11=document.querySelector("body");
    color11.style.backgroundColor="red";
}
else if(a<b){
    var heading=document.querySelector("h1");
    heading.innerHTML="You Won";
    var color11=document.querySelector("body");
    color11.style.backgroundColor="yellow";

}
else{
    var heading=document.querySelector("h1");
    heading.innerHTML="Draw";
    var color11=document.querySelector("body");
    color11.style.backgroundColor="white";

}


}




