const areaRect = (length, width) => {
  console.log("The area of the rectangle is:" + length * width);
};
console.log("q1:");
let length = 2;
let width = 3;
console.log("length is " + length + " width is " + width);
areaRect(length, width);
const convertTemp = (temp, to_unit) => {
  if (to_unit == "f") {
    let ctof = (temp * 9) / 5 + 32;
    console.log(temp + "\xB0C is " + ctof + "F");
  } else if (to_unit == "c") {
    let ftoc = (temp - 32) * (5 / 9);
    console.log(temp + "F is " + ftoc + "\xB0C");
  } else {
    console.log("Invalid unit/s");
  }
};
console.log("q2:");
convertTemp(30, "f");
convertTemp(30, "c");

const sum = (arr) => {
  total = 0;
  arr.forEach((e) => {
    total += e;
  });
  return total;
};
let Numbers = [23, 54, 32, 87, 47];
console.log("q3:");
console.log("Sum of " + Numbers + " is " + sum(Numbers));
const max = (arr) => {
  let maximum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maximum) {
      maximum = arr[i];
    }
  }
  return maximum;
};
console.log("q4:");
let arr = [16, 4, 2, 0, 19, 6];

console.log("Max of " + arr + " is " + max(arr));
const reverse = (arr) => {
  let rev_arr = [];
  arr.forEach((e) => {
    rev_arr.unshift(e);
  });
  return rev_arr;
};
console.log("q5:");
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr2);
console.log("after reversing:");
console.log(reverse(arr2));
const printTri = (num) => {
  let tmp = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      tmp += "*";
    }
    tmp += "\n";
  }
  return tmp;
};
console.log("q6:");
console.log(printTri(5));
