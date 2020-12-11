let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число');
  if (input === null && numbers.length === 0) {
    break;
  }
  if (input === null) {
    for (const number of numbers) {
      total += number;
    }
    console.log(`Общая сумма чисел равна ${total}`);
    break;
  }
  const isNotANumber = Number.isNaN(Number(input));
  if (isNotANumber) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }
  numbers.push(Number(input));
} while (input !== null);