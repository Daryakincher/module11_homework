function sumFirstAndSecond (x){
    return function sumFirstAndSecond(y) {
     return x + y;
   };  
 }
 console.log(sumFirstAndSecond(7)(2));