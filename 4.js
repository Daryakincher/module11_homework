function numberInterval(number1, number2) {
    let IntervalId = setInterval (function () {
          console.log(number1++);
       if (number1 > number2) clearInterval(IntervalId);
      }, 1000)
    }
    numberInterval(5, 15);