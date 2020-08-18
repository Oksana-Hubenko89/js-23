/*
 * Посчитать общую сумму покупок в корзине
 */

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

// 1 Объявить переменную для суммы
let total = 0;

// // 2 Перебираем массив
// for (let i = 0; i < cart.length; i += 1) {
//   // 3 Цену каждого товара добавляем к общей сумме
//   total += cart[i];
// }

// 2 Перебираем массив
for (const itemValue of cart) {
  // 3 Цену каждого товара добавляем к общей сумме
  total += itemValue;
}

// 4 Выводим сумму
console.log(total);