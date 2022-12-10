// Завдання 1

for (let i = 1; i < 6; i++) {
    if ((i === 1) || (i % 2) !== 0) {
        console.log('Buzz')
    } 
    else if ((i % 3) === 0 || (i % 2) === 0) {
        console.log('FizzBuzz');
    }
    else if ((i % 3) !== 0 ) {
        console.log('Fizz');
    }
    else (i) 
        console.log('Fizz');
    }  

    // Працює, але наполовину :)

    // Завдання 2

    let fact = 7;
    let result = 1;
    for (let i = 1; i<= fact; i++) {
        result *= i;
    }
    console.log(result) 

    // Завдання 3 

    const sheetsInReamPaper = 500;
    const consumptionPerWeek = 1200;
    const weeksAmount = 8;

   let minConsumptionPerWeek = i = consumptionPerWeek * weeksAmount/sheetsInReamPaper;

   console.log(minConsumptionPerWeek);

//   Можливо, якщо в моєму місті світло буде з'являтися побільше ніж 4-6 годин на добу, 
//   то буду розуміти ці штуки краще, а поки соромно ))