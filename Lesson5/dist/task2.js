"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Напишите самовызывающиеся функцию подсчета факториала числа: число должно передаваться как параметр функции
const result = (function countfactorial(n) {
    if (!Number.isInteger(n) || n < 0) {
        console.error("must be an integer");
        return 0;
    }
    if (n <= 1)
        return 1;
    return n * countfactorial(n - 1);
})(5);
console.log(result);
//# sourceMappingURL=task2.js.map