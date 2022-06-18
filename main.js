function equalFunction(){
let array = []
let operators = []
  for(let i = 0 ; i<result.value.length;i++){
    let numbers+=result.value[i]
switch (numbers) {
  case "+":
    array.push(numbers);
    numbers = "";
    operators.push(numbers[i]);
    break;
  case "-":
        array.push(numbers);
        numbers = "";
        operators.push(numbers[i]);
  break;
  case "*":
        array.push(numbers);
    numbers = "";
    operators.push(numbers[i]);
    break;
    case "/":
          array.push(numbers);
    numbers = "";
    operators.push(numbers[i]);
  default:
    break;
}
  }
}
equalFunction();

function showNumbers(num){
  result.value += num.value
}


// function calculate() {
//   switch () {
//     case "+":
//       result.innerHTML = 
//       break;
//     case "-":
//       result.innerHTML = 
//       break;
//     case "/":
//       result.innerHTML = 
//       break;
//     case "*":
//       result.innerHTML = firstNumber.value * secondNumber.value;
//       break;
//     default:
//       break;
//   }
// }










// let btn = document.getElementsByClassName("btn");
// for (const iterator of btn) {
//   switch (iterator) {
//     case 2 * 2:
//       div.innerHTML = iterator
//       break;
  
//     default:
//       break;
//   }
// }