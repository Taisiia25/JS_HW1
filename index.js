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

// Завдання 4

// Создать функцию, которая выведет в консоль номер этажа и номер подъезда по номеру квартиры. 
// Этажей у нас 9, квартир на этаже по 3

const roomsOnFloor = 3;
const floors = 9;
const roomNumber = 456 

const roomsInPorch = roomsOnFloor * floors // квартир у під`їзді

const roomsInLastPorch = roomNumber % roomsInPorch

const porch = (roomsInLastPorch === 0)  ?
    roomNumber / roomsInPorch : 
    ((roomNumber - roomsInLastPorch)  / roomsInPorch) + 1;

    let floor =  null;

    const lastRooms = roomsInLastPorch % roomsOnFloor

    if ( lastRooms === 0) {
        floor = roomsInLastPorch / roomsOnFloor;
    } else  { 
        floor = (roomsInLastPorch - lastRooms) / roomsOnFloor + 1
    }

console.log (`Porch: ${porch}; Floor: ${floor} `);


// Завдання 5 

//    Вывести в консоль пирамиду. Переменная указывает количество строк из которых построится пирамида. 
//    Пирамида должна строится в одинаковом визуально виде между собой, но строго учитывая кол-во строк

const medianNumber = 6;
const strLength =  (6 * 2) - 1;

let count = 1;

for (let i = 1; i <= medianNumber; i++) {
    
    let str = ''.padStart(count, '#') 
    
    let beforeOrAfter =  ''.padStart((strLength - count)/2, '-') 
    
    str =  beforeOrAfter + str + beforeOrAfter;
    
    console.log(str);

    count += 2; 
}
