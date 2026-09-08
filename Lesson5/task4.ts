// Написать функцию, которая проверяет - подходит ли пароль, переданный параметром, под заданные требования:
// Пароль должен содержать как минимум одну заглавную букву и цифру
// Пароль только из латинских букв
// Длина пароля должна быть не менее 10 символов

const validatePassword = (password: string): boolean => {
  if (password.length < 10) {
    return false;
  }
  if (!/[A-Z]/g.test(password)) {
    return false;
  }
  if (!/[0-9]/g.test(password)) {
    return false;
  }
  if (!/^[A-Za-z0-9]+$/g.test(password)) {
    return false;
  }
  return true;
};

console.log(validatePassword("1234567890")); // false
console.log(validatePassword("1234567890a")); // false
console.log(validatePassword("1234567890A")); // true
console.log(validatePassword("1234567890Aa")); // true
