// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i < 11; i++) {
  if (i === 0) {
    console.log(`${i} - это ноль`);
  } else if (i % 2 === 0) {
    console.log(`${i} - четное число`);
  } else {
    console.log(`${i} - нечетное число`);
  }
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);
console.log(arr);

// Задание 3.
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов

const arrRandom = [];
const getRandomNum = () => Math.floor(Math.random() * 10);
for (let i = 0; i < 5; i++) {
    arrRandom.push(getRandomNum());
}
console.log(arrRandom);

// 1. Рассчитать сумму элементов этого массива
let sumNumArray = 0;
for (let i = 0; i < arr.length; i++) {
    sumNumArray += arrRandom[i];
}
console.log('Сумма элементов массива ' + sumNumArray);

// 2 вариант решения
console.log(arrRandom.reduce((sum, nextNum) => nextNum + sum, 0));

// 2. Найти минимальное число
let minNumArray = arrRandom[0];
for (let i = 1; i < arrRandom.length; i++) {
    if (minNumArray > arrRandom[i]) {
        minNumArray = arrRandom[i];
    }
}
console.log('Минимальое число массива ' + minNumArray);

// 3. Найти есть ли в этом массиве число 3
function searchNum(argArray, argNum) {
    let resultText = 'В массиве нет числа ';
    for (let i = 0; i < argArray.length; i++) {
        if (argArray[i] === argNum) {
            resultText = 'В массиве есть число ';
        }
    }
    return resultText + argNum;
}
console.log(searchNum(arrRandom, 3));

// 2 вариант решения
console.log(arrRandom.some(item => item === 3))