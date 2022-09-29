// На рахунку користувача є 23580 кредитів, значення зберігається
// в змінній credits (створи і привласни).
// Користувач вирішує купити ремонтних дроїд, які коштують по 3000 кредитів за штуку.
// Ціна одного дроїда зберігається в змінній pricePerDroid (створи і привласни).

// При відвідуванні сторінки, використовуючи prompt,
// необхідно запитати кількість дроїдів, які користувач хоче купити
// і зберегти в змінну.

// Напиши скрипт який:

// Якщо в prompt була натиснута кнопка Cancel,
// виводить в консоль повідомлення 'Скасовано користувачем!'.
// В іншому випадку, розраховує загальну ціну замовлення
// і зберігає в змінній totalPrice.
// Перевіряє чи зможе користувач оплатити замовлення:
// якщо сума до оплати перевищує кількість кредитів на рахунку,
// виводь в консоль повідомлення 'Недостатньо коштів на рахунку!'.
// в іншому випадку необхідно порахувати залишок кредитів на рахунку
// і вивести повідомлення 'Ви купили [число] дроїдів,
// на рахунку залишилося [число] кредитів.'.

let credits = 23580;
const pricePerDroid = 3000;
let totalPrice = 0;
let balans = 0;
let namberPerDroid = prompt("Введіть кількість дроїдів, яку хочете купити");

if (!namberPerDroid) {
  console.log("Скасовано користувачем!");
} else {
  totalPrice = pricePerDroid * namberPerDroid;
  if (credits < totalPrice) {
    console.log("Недостатньо коштів на рахунку!");
  } else {
    balans = credits - totalPrice;
    console.log(
      `Ви купили ${namberPerDroid} дроїдів, на рахунку залишилося ${balans} кредитів.`
    );
  }
}
