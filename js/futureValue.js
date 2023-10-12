//variables
let futureValue
let investment
let rate
let years
let i

//collect values from user
investment=parseFloat(prompt('how much do you want to invest?(XXXX.XX)'))
rate=parseFloat(prompt('enter interest rate as XX.X'))
years=parseFloat(prompt('enter the number of years you want to invest for'))

//calculate future value
futureValue=investment//set the original number to be investment
for(i=0; i<years; i++){
    futureValue=futureValue+(futureValue*rate/100) 
}

//display the results
document.write(`investment amount: $${investment.toFixed(2)}<br>`)
document.write(`interest rate: ${rate.toFixed(2)}%<br>`)
document.write(`years: ${years}<br>`)
document.write(`future value: $${futureValue.toFixed(2)}`)