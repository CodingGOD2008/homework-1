//პირველი:
let num = 20 < 100 ? 100 : 30;
if(num < 50){
    console.log('ნაკლებია 50-ზე')
}
else if(num > 20){
    console.log('მეტია 20-ზე')
}
else{
    console.log('შეცდომა')
}
//მეორე:
let name = 'მარიამი'
if(name = 'მარიამი'){
    console.log(true)
}
else{
    console.log(false)
}
//მესამე:
switch(name){
    case 'მარიამი':
        console.log(true)
        break;
    default:
        console.log(false)
}
//მეოთხე:
let car = 'Mercedes'
console.log(typeof car)
//მეხუთე:
let number = 10
console.log(String(number))