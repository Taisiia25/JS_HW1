// Завдання 1

for (let i = 1; i <= 10; i++) {
   if (i % 3 === 0) {
    console.log('FizzBuzz')
} else if (i % 2 !== 0) {
    console.log('Buzz');
} else if (i % 2  === 0) {
    console.log('Fizz')
}
}


// Завдання 2

let i = 1;

for (let b = 2; b <= 7; b++) {
    i *= b;  
}

alert(`7! = ${i}`)


// Завдання 3 

const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

let amountSheets = consumptionPerWeek * weeksAmount // розхід листів за 8 тижнів

if ((amountSheets) % sheetsInReamPaper === 0)       // Якщо остача від ділення загальної кількості листів за 8 тижнів === 0
    console.log(amountSheets / sheetsInReamPaper);  // 19.2 ---> false (остача від ділення 100 листів = 0.2 пачки; тому мінімальна потреба 19 + 1 пачка)
else { console.log((amountSheets  - ((amountSheets) % sheetsInReamPaper)) / sheetsInReamPaper + 1) } 
                  //  (9600 листів  -   залишок 100  листів)             / к-ть листів в пачці  + 1 пачка  