var input = document.querySelectorAll(".side-input");
var opBtn = document.querySelector("#check-btn");
var result = document.querySelector("#output");

opBtn.addEventListener("click", calcHypo);

function calcHypo(){
    var A = Number(input[0].value);
    var B = Number(input[1].value);

    const sumSide = sideSum(A,B);
    var C = Math.sqrt(sumSide);
    result.innerText = C;
}

function sideSum(sideA, sideB){
    const sum = (sideA*sideA) + (sideB*sideB);
    return sum;
}