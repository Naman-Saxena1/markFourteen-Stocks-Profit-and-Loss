const initialPrice = document.querySelector("#initial-price")
const quantity = document.querySelector("#quantity")
const currentPrice = document.querySelector("#current-price")
const CalculateBtn = document.querySelector("#calculate-btn")
const output = document.querySelector("#output")

function setMessage(status,change,changePercentage)
{
    if(status=="Profit")
    {
        output.innerText=`Hooray! You have a profit of Rs ${change} and profit percentage is ${changePercentage}% 😎`
        output.style.color = 'green';
    }
    else if(status=="Loss")
    {
        output.innerText=`Ooh no! You have a loss of Rs ${change} and loss percentage is ${changePercentage}% 😥`
        output.style.color = '#9c466d';
    }
    else
    {
        output.innerText=`Break even, neither gain nor loss! 🤔`
        output.style.color = 'black';
    }
}

function calculateProfitOrLoss(initial_Price, quantity_Bought, current_Price)
{
    if(initial_Price<current_Price)
    {
        let profit = ((current_Price-initial_Price)*quantity_Bought).toFixed(2)
        let profitPercentage = ((profit/(initial_Price*quantity_Bought))*100).toFixed(2)
        setMessage("Profit",profit,profitPercentage)
    }
    else if(initial_Price>current_Price)
    {
        let loss = ((initial_Price-current_Price)*quantity_Bought).toFixed(2)
        let lossPercentage = ((loss/(initial_Price*quantity_Bought))*100).toFixed(2)
        setMessage("Loss",loss,lossPercentage)
    }
    else
    {
        setMessage("No change",0,0)
    }
}

function calculateButtonClickHandler()
{
    let initialPriceValue = Number(initialPrice.value)
    let quantityValue = Number(quantity.value)
    let currentPriceValue = Number(currentPrice.value)
    if(initialPrice.value==""||quantity.value==""||currentPrice.value=="")
    {
        output.innerText=`Please enter all inputs!`
        output.style.color = '#9c466d';
    }
    else if(initialPriceValue<0||quantityValue<0||currentPriceValue<0)
    {
        output.innerText=`Please enter positive values!`
        output.style.color = '#9c466d';
    }
    else
    {
        calculateProfitOrLoss(initialPriceValue, quantityValue, currentPriceValue)
    }
}

CalculateBtn.addEventListener("click",calculateButtonClickHandler)