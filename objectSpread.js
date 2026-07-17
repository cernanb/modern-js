const person = {
  name: "Cernan",
  favLang: "Javascript",
};

console.log(person);

const newPerson = { ...person, favShoe: "Nike" };

delete newPerson.favLang;

console.log(newPerson);

console.log(person);
