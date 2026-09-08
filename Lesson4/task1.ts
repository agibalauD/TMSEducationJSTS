const name: string = "Александр";

const text: string = `Я, ${name}, учу TYPESCRIPT`;

//Написать программу, которая выводит text в нижнем регистре с вашим именем
//  если имя не совпадает, то заменить его

const yourName: string = "Даниил";
if (text.includes(yourName)) {
  console.log(text.toLowerCase());
} else {
  const FirstNameIndex = text.indexOf(name);
  const LastNameIndex = FirstNameIndex + name.length;
  const LastTextAfterName = text.slice(LastNameIndex);
  const newText: string = text.slice(0, FirstNameIndex).concat(yourName).concat(LastTextAfterName);
  console.log(newText.toLowerCase());
}
