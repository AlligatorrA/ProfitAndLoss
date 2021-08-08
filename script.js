const purPrice = document.querySelector(".purchase-price");
const quantPur = document.querySelector(".Stock-Quantity");
const curPrice = document.querySelector(".Current-Price");
const checkBtn = document.querySelector(".check-button");
const output = document.querySelector(".output");
const divMain = document.querySelector(".container");

checkBtn.addEventListener("click", absoluteAmt, percentValue)

function absoluteAmt() {
    let a = Number(purPrice.value);
    let b = Number(quantPur.value);
    let c = Number(curPrice.value);
   


    if (a>c) {
        let loss = (a*b)-(b*c);
        let lossPer = (((a-c)/a)*100).toFixed(3)
        output.innerHTML = `You lose ${lossPer}%  You Total loss is  ₹${loss} 😭 `
        if (lossPer>=50) {
            divMain.style.backgroundImage = ` url(./lossin.gif)`
        }
    }else if (c > a) {
        let gain = (b*c)-(a*b)
        let gainPer = (((c-a)/a)*100).toFixed(3)
        output.innerHTML = `You gain ${gainPer}% your total gain is ₹${gain}😝 `
        if (gainPer>=100) {
            divMain.style.backgroundImage = 'url(./profit.jpeg)  '
        }
    }
   
    
}

function percentValue() {
    
}

    
