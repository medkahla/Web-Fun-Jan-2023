console.log("page loading...");
var cookieDev = document.querySelector(".cookie-policy");

function accecpt(){
    cookieDev.remove();
}
function loading(){
    alert("loading weather report...")
}
function c2f(temp){
    return Math.round(9/5 * temp +32);
}
function f2c(temp){
    return Math.round(5/9 * temp -32);
}
function convert(e){
    console.log(e.value);
    for (var i =0; i <7 ;i++){
        var temps = document.querySelector("#temp"+1);
        var tempv = parseInt(temps.innerText);
        if (e.value == "°C"){
            temps.innerText = f2c(tempv);
        } else {
            temps.innerText = c2f(tempv);
        }
    }
}