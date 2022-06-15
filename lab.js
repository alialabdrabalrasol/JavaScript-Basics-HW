const findAge = (birth_year) => {
  let now = new Date().getFullYear();
  console.log("Your age is " + (now - birth_year));
};

const findDay = (day) => {
  switch (day) {
    case 1:
      console.log("Sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuesday");
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Thursday");

      break;
    case 6:
      console.log("Friday");
      break;
    case 7:
      console.log("Saturday");

      break;
    default:
      console.log("Please enter a number between 1 and 7");
      break;
  }
};
const isOdd = (num) => {
  if (num % 2 == 0) {
    return false;
  } else {
    return true;
  }
};
const findGrade = (total) => {
  if (total >= 90) {
    console.log("A");
  } else if (total >= 80) {
    console.log("B");
  } else if (total >= 70) {
    console.log("C");
  } else if (total >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
};

const isLeapYear = (year) => {
  if (year % 4 == 0 && year % 100 != 0) {
    console.log(true);
  } else {
    console.log(false);
  }
};

const fib = (num) => {
  let fib_seq = [0, 1];
  for (let i = 2; i < num; i++) {
    fib_seq.push(fib_seq[i - 1] + fib_seq[i - 2]);
  }
  console.log(fib_seq);
};

const findSquares = (to) => {
  for (let i = 1; i <= to; i++) {
    console.log(Math.pow(i, 2));
  }
};

const findMulTable = (from, to) => {
  for (let i = from; i <= to; i++) {
    console.log(i + "\n");
    for (let j = 1; j <= 10; j++) {
      console.log(i + " x " + j + " = " + i * j);
    }
    console.log("\n");
  }
};

const findOdd = (num) => {
  let i = 1;
  let odd_list = [];
  while (i <= num) {
    if (isOdd(i)) {
      odd_list.push(i);
    }
    i++;
  }
  return odd_list;
};
const isPow2 = (num) => {
  if (isOdd(num)) {
    return false;
  }

  let i = num;
  while (i > 1) {
    if (isOdd(i)) {
      return false;
    }
    i = i / 2;
  }
  return true;
};

const isPow2v2 = (num) => {
  if (Number.isInteger(Math.log2(num))) {
    console.log(true);
  } else {
    console.log(false);
  }
};
