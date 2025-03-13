const fruits = ["kiwi", "apple", "kiwi", "orange", "kiwi", "apple"];

// 1. Написати функцію що приймає строку (строка = назва фрукту).
//  Вивести цифрове значення скільки разів зустрічається цей фрукт у масиві

// 1-й варіант:

function countFruits(fruits, fruitToCount) {
  let total = 0;
  for (const fruit of fruits) {
    if (fruit === fruitToCount) {
      total += 1;
    }
  }
  return total;
}

console.log("kiwi:", countFruits(fruits, "kiwi"));
console.log("apple:", countFruits(fruits, "apple"));

// 2-й варіант:

function fruitsToCount(fruits, fruitToCount) {
  return fruits.filter((fruit) => fruit === fruitToCount).length;
}

console.log("kiwi:", fruitsToCount(fruits, "kiwi"));
console.log("apple:", fruitsToCount(fruits, "apple"));

// 2. Написати функцію що повертає унікальні значення фруктів масиву

function uniqueValues(fruits) {
  let uniqueArray = [];

  for (let index = 0; index < fruits.length; index++) {
    if (!uniqueArray.includes(fruits[index])) {
      uniqueArray.push(fruits[index]);
    }
  }

  return uniqueArray;
}

console.log(uniqueValues(fruits));
// 3. Написати функцію що приймає строку (строка = назва фрукту).
// Вивести масив фруктів без фрукту що був переданий в цю функцію.

function arrayWithoutValue(fruits, value) {
  return fruits.filter((fruit) => fruit !== value);
}

console.log(arrayWithoutValue(fruits, "kiwi"));
console.log(arrayWithoutValue(fruits, "orange"));

// Треба зробити 3 таких самих функції, але вхідними даними є масив не строк, а масив об'єктів ( фруктів у корзині)

const fruitBasket = [
  { fruitName: "Apple", weight: 1.2 }, // weight in kilograms
  { fruitName: "Banana", weight: 1.1 },
  { fruitName: "Orange", weight: 0.8 },
  { fruitName: "Grapes", weight: 0.5 },
  { fruitName: "Strawberry", weight: 0.2 },
  { fruitName: "Mango", weight: 1.5 },
  { fruitName: "Pineapple", weight: 2.0 },
  { fruitName: "Kiwi", weight: 0.1 },
  { fruitName: "Peach", weight: 0.3 },
  { fruitName: "Watermelon", weight: 5.0 },
  { fruitName: "Watermelon", weight: 5.0 },
];

// 2.1. Написати функцію що приймає строку (строка = назва фрукту).
//  Вивести цифрове значення скільки разів зустрічається цей фрукт у масиві

function countFruitsInBasket(fruitBasket, fruitToCount) {
  let fruitWeight = 0;
  for (const fruit of fruitBasket) {
    if (fruit.fruitName === fruitToCount) {
      fruitWeight = `${fruit.weight} kilograms`;
    }
  }
  return fruitWeight;
}

console.log("Apple:", countFruitsInBasket(fruitBasket, "Apple"));
console.log("Mango:", countFruitsInBasket(fruitBasket, "Mango"));

// 2.2 Написати функцію що повертає унікальні значення фруктів масиву

function uniqueValuesInBasket(fruitBasket) {
  let uniqueFruits = [];

  for (let index = 0; index < fruitBasket.length; index++) {
    if (!uniqueFruits.includes(fruitBasket[index].fruitName)) {
      uniqueFruits.push(fruitBasket[index].fruitName);
    }
  }

  return uniqueFruits;
}

console.log(uniqueValuesInBasket(fruitBasket));

// 2.3. Вивести масив фруктів без фрукту що був переданий в цю функцію.

function arrayWithoutValue(fruitBasket, value) {
  return fruitBasket.filter((fruit) => fruit.fruitName !== value);
}

console.log(arrayWithoutValue(fruitBasket, "Apple"));
console.log(arrayWithoutValue(fruitBasket, "Banana"));

// Задача 4: скільки важить вся корзина фруктів

function basketWeight(fruitBasket) {
  let totalWeight = 0;

  for (const fruit of fruitBasket) {
    totalWeight += fruit.weight;
  }

  return totalWeight;
}

const weightOfBasket = basketWeight(fruitBasket);

console.log(`Вся корзина фруктів важить ${weightOfBasket} kg`);

// Є дуже потужна функція:
// function sumNumbers(a, b) {
//   return a + b;
// }

// Ми її можемо викликати ось так:
// sumNumbers(2, 3); // поверне 5

// Але після виклику, нам не зрозуміло що робить функція і ми не бачимо результату.

// Завдання:
// Написати функцію, що приймає два аргументи:
// 1. функцію (що проводить якісь обчислення)
// 2. назву операції яку робить функція

// Ця функція має повернути функцію що буде:
// 1. Писати в конcоль: "Я вмію {XXX} числа". Де XXX -  це другий параметр функції, назва операції
// 2. Викликати передану функцію
// 3, Виводити результат викликаної функції у форматі: "Результат виклику функції: YYY" (де YYY це число - результат мат. функції)

// Приклад роботи цієї функції:
// const poweredSumFunction = powerFunction(sumNumbers, 'додавати');

// poweredSumFunction(2, 5)

// /В консолі побачимо:
// // Я вмію додавати числа.
// // Результат виклику функції: 7

function sumNumbers(a, b) {
  return a + b;
}

function powerFunction(fn, actionName) {
  return function () {
    result = fn(10, 3);

    console.log(`Я вмію ${actionName} числа. `);
    console.log(`Результат виклику функції: ${result}`);

    return result;
  };
}

function sumNumbers(a, b) {
  return a + b;
}

const poweredSumFunction = powerFunction(sumNumbers, "додавати");
console.log(poweredSumFunction());
