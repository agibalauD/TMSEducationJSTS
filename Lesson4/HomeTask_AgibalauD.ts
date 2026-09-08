//"Order#1456; date=2026-01-26 09:07:05; amount=15.3" в формат:“Заказ № 1456 от 26/01/2026 09:07 на сумму 16 рублей”
import { orderInfo } from "./order";

const orderStart = orderInfo.indexOf("#") + 1;
const orderEnd = orderInfo.indexOf(";");
const orderNumber = orderInfo.slice(orderStart, orderEnd);

const dateStart = orderInfo.indexOf("date=") + "date=".length;
const dateEnd = orderInfo.indexOf(";", dateStart);
const date = orderInfo.slice(dateStart, dateEnd);
const formattedDate = `${date.slice(8, 10)}/${date.slice(5, 7)}/${date.slice(0, 4)} ${date.slice(11, 16)}`;

const amountStart = orderInfo.indexOf("amount=") + "amount=".length;
const amount = Number(orderInfo.slice(amountStart));

console.log(`Заказ № ${orderNumber} от ${formattedDate} на сумму ${Math.ceil(amount)} рублей`);
