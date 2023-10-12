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

//validate investment,rate,years
if(isNaN(investment) || investment<0){
    alert('invalid investment amount. the number should be greater than 0.')
}else if(isNaN(rate) || rate<=0 || rate>6){
    alert('invalid interest rate. the number should between 0 and 6.')
}else if(isNaN(years) || years<1 ||years>30){
    alert('invalid number of years. the number should between 1 and 30.')
}else{
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
}