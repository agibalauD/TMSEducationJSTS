//"Order#1456; date=2026-01-26 09:07:05; amount=15.3" в формат:“Заказ № 1456 от 26/01/2026 09:07 на сумму 16 рублей”
import { formattedDate } from "./date_time";
import { amount } from "./amount";
import { order } from "./order";

console.log(`Заказ № ${order} от ${formattedDate} на сумму ${Math.ceil(amount)} рублей`);
