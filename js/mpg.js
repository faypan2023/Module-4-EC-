let miles
let gallons
let mpg
let again='y'

do {
   miles=parseFloat(prompt('enter the miles driven.'))
   gallons=parseFloat(prompt('enter the number of gallons fuel tank holds'))
   if(!isNaN(miles)&& miles >0 && !isNaN(gallons)&& gallons>0){       //isNaN means "is this not a number?''
 mpg=miles/gallons
 console.log(`you car gets ${mpg.toFixed(2)}miles to the gallon.`)
   }else{
       alert('one or both entries is invalid.')
   }
   do {
    again=prompt('run application again? (y/n)', 'y').toLowerCase()
}while(again!=='y' && again!=='n')//add code to validate the "again" entry. I
}while(again==='y')

console.log('the program has been terminated.')//enter "n", it terminate the loop.