
let age = +prompt("Enter the age");
let price;

if (age < 0) {
    console.log("Invalid age");
} else if (age < 12) {
    price = 50;
} else if (age < 60) {
    price = 100;
} else {
    price = 70;
}

if (age >= 0) {
    let day = +prompt("Enter the day from 1 to 7");

    switch (day) {
        case 1:
            console.log("Friday");
            price += 20;
             console.log(`final Result= ${price}`);
            break;

        case 2:
            console.log("Saturday");
            price += 20; 
            console.log(`final Result= ${price}`);
            break;

        case 3:
            console.log("Sunday");
            console.log(`final Result= ${price}`);
            break;

        case 4:
            console.log("Monday");
             console.log(`final Result= ${price}`);
            break;

        case 5:
            console.log("Tuesday");
             console.log(`final Result= ${price}`);
            break;

        case 6:
            console.log("Wednesday");
             console.log(`final Result= ${price}`);
            break;

        case 7:
            console.log("Thursday");
             console.log(`final Result= ${price}`);
            break;

        default:
            console.log("Invalid day");
    }

  
}
//--------------------------------------------------------------------------------------//
let num1 = +prompt("enter the number");

for (i=1; i<=10 ;i++){
    num1*i;
    console.log(`result=${num1*i}`)
}
if(num1 %2==0){
    console.log("number is even");
    
} else{
    console.log("number is odd");
}
//--------------------------------------------------------------------------------------------------------------------------------------------//
let target_amaount= +prompt("enter the target amount")
let daily_saving= 10;
 let increase_every=1;
 let total=0;
for(i=1;total<target_amaount;i++ ){
    total+=daily_saving
    console.log(`saved in day${i} = ${daily_saving}, Total${total}`);
    if(total >= target_amaount){
console.log(`you reach the target amount with total ${total}`);
 console.log(`The goal was reached in ${i} days!`);
    }
    else if (i % increase_every === 0) {
    daily_saving += 10;
}
}