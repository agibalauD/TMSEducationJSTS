// Написать функцию, которая поверхностно сравнивает два объекта
// * В объекте могут быть функции

interface User {
  name: string;
  age: number | (() => number);
}

const user1: User = {
  name: "Vlad",
  age: 23,
};

const user2: User = {
  name: "Vlad",
  age: 23,
};

const user3: User = {
  name: "Vlad",
  age: () => 23,
};

const user4: User = {
  name: "Vlad",
  age: () => 23,
};
function shallowCompare(obj1: User, obj2: User) {
  for (const key in obj1)
    if (obj1[key as keyof User].toString() !== obj2[key as keyof User].toString()) {
      return false;
    }
  return true;
}
console.log(shallowCompare(user1, user2)); // true
console.log(shallowCompare(user1, user3)); // false
console.log(shallowCompare(user1, user4)); // false
console.log(shallowCompare(user2, user3)); // false
console.log(shallowCompare(user2, user4)); // false
console.log(shallowCompare(user3, user4)); // false
