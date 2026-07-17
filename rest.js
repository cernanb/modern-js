// Rest parameters
function addNums(...whatever) {
  let result = 0;
  whatever.forEach(function (num) {
    if (typeof num === "number") {
      result = result + num;
    }
  });

  return result;
}

const result = addNums(
  10,
  20,
  30,
  40,
  50,
  15,
  15,
  15,
  15,
  15,
  15,
  15,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  43,
  54,
  65,
  543,
  543,
  543,
  543,
  543,
  "hello",
  543,
  543,
  543,
  543,
  543,
  543,
  543,
  543,
  543,
  543,
  543,
  543,
  543,
  543,
  543,
  543,
  654,
  654,
  654,
  1000,
  2000,
);

console.log(result);
