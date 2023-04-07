function isNumber(num) {
    if (num > 1000) {
          return console.log("Данные неверны");
      }
      if (num == 1) {
          return console.log("Вы ввели 1");
      }
      if (num == 0) {
          return console.log("Вы ввели 0");
    } else {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return " - составное число";
        }
      }
      return " - простое число";
    }
  }
  let randomNum = Math.floor(Math.random() * 1500);
  let res = isNumber(randomNum);
  console.log(randomNum + res);
    