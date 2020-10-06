let roll = document.querySelector(".roll");
let totalresult = document.querySelector("#total");
let showtherolls = document.querySelector(".showtherolls");
let lists = document.querySelector("#lists");
let numofdice = document.querySelector("#number-of-dice");
let reset = document.querySelector("#reset-button");
let dierolls = [];
let counter = 0;
roll.addEventListener("click", function(){
let dicenum = numofdice.value

while (counter<dicenum) {
    let x = Math.floor(Math.random()*6 +1);
    dierolls.push(x);
    total +=1;
    counter++;
    
}
totalresult.innerHTML=[];
});

showtherolls.addEventListener("click", function(){
    str = "<ol>";
    dierolls.forEach(function (dicenum){
        str += "<li>" + dicenum + "</li>";
    });
    str +="</ol>";
    lists.innerHTML=str;
});
reset.addEventListener("click", function(reset){
    
    reset.innerHTML= Reset;
});
