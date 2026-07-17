export function add(...nums) {
  let result = 0;

  nums.forEach(function (num) {
    result = result + num;
  });

  return result;
}

export function add2(num) {
  return num + num;
}
