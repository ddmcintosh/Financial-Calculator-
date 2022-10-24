"use strict";

window.onload = init;

function init()
{
    const btnCalculate = document.getElementById("btnCalculate");
    btnCalculate.onclick = btnCalculateOnClicked;

    const clearButton = document.getElementById("clearButton");
    clearButton.onclick = clearBtnOnClicked;
}

function btnCalculateOnClicked()
{
    const inputBalanceElement = document.getElementById("inputBalance");
    let inputBalance = Number(inputBalanceElement.value);
    

    const cardInterestElement = document.getElementById("cardInterest");
    let cardInterest = Number(cardInterestElement.value);


    const minMonths = document.getElementById("minMonths");
    let num3 = Number(minMonths);

    
    let answer = ((cardInterest / 12) * inputBalance);
    
    const ans = document.getElementById("answer");
    
    ans.value = answer; 
}


