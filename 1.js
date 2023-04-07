let numberArr = [ 1 ,  2 ,  0 ,  "g" ,  47 ,  4 ,  7 ,  0 ,  null ,  25 ,  69 ,  "Skf" ] ;
function getSumOddAndEven(numberArr) {
 let zero = 0;
    let odd = 0;
    let even = 0;
    let other = 0;
    for (let i = 0; i < numberArr.length; i++) {
        if (typeof numberArr[i] === 'number' && !isNaN(numberArr[i])) {
            if (numberArr[i] === 0) {
                zero = zero + 1;
            } else if (numberArr[i] % 2 === 0) {
                even = even + 1;
            } else if (numberArr[i] % 2 !== 0) {
                odd = odd + 1;
            }
        }
        else {
            other = other+1;
        }

    }
  console.log(
    "количество нулей-" + zero,
    "количество четных чисел-" + even,
    "количество нечетных чисел-" + odd,
    "количество не числовых значений-" +other
  );
}
getSumOddAndEven(numberArr);