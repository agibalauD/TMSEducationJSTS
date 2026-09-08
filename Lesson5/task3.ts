// Напишите функцию, которая при каждом вызове будет выводит увеличенный счетчик на 1

const counter = createCounter(10);
const counter2 = createCounter(5);
console.log(counter()); // 11
console.log(counter()); // 12

console.log(counter2()); // 6
console.log(counter2()); // 7

function createCounter(n: number): () => number {
  let currentValue = n;

  return () => {
    currentValue += 1;
    return currentValue;
  };
}
