'use strict';

let bill = document.getElementById("bill");
let persons = document.getElementById("persons");
let tipButtons = document.querySelectorAll('.tip-button');
const percent_50 = document.getElementById("50");
const custom = document.querySelector(".custom");    
let show_tip = document.querySelector(".show-tip");
let show_total = document.querySelector(".show-total")
const reset = document.querySelector('.reset');

const error = document.querySelector('.error');



const calTotPerson = function(tipPercentage){
    let billAmnt = Number(bill.value);
    let noOfper = Number(persons.value);

    let tipAmnt = (tipPercentage/100)*billAmnt;
    let tipAmntPerPerson = tipAmnt/noOfper;


    let newTotal = billAmnt+tipAmnt;
    let newTotalPerPerson = newTotal/noOfper;

    show_tip.innerHTML = `<img src="./images/icon-dollar.svg" alt="dollar">${tipAmntPerPerson.toFixed(2)}`;
    show_total.innerHTML = `<img src="./images/icon-dollar.svg" alt="dollar">${newTotalPerPerson.toFixed(2)}`;
}

tipButtons.forEach(button => {
    button.addEventListener('click',function(){
        button.style.background = "hsl(184, 14%, 56%)";
        let percentage = Number(this.textContent.replace('%',''));
        console.log(typeof(percentage));
        if(persons.value == 0){
            error.style.display = "block";
            persons.style.border = "1px solid hsl(4, 100%, 67%)";
        }else{
            calTotPerson(percentage);
        }
    });
});

custom.addEventListener('input',function(){
    let customPercentage = custom.value.includes('%')?Number(custom.value.replace('%','')):Number(custom.value);
    if(persons.value == 0){
        error.style.display = "block";
        persons.style.border = "1px solid hsl(4, 100%, 67%)";
    }else{
        calTotPerson(customPercentage);
    }
})

reset.addEventListener('click',function(){
    bill.value = 0;
    persons.value = 0;
    custom.value = 0;
    error.style.display = "none";
    persons.style.border = "none";
    show_tip.innerHTML = `<img src="./images/icon-dollar.svg" alt="dollar">${0}`;
    show_total.innerHTML = `<img src="./images/icon-dollar.svg" alt="dollar">${0}`;
});

