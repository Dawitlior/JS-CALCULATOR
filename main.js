let result = document.getElementById("result");
let showNumbers = (number) => {
  result.value += number;
  result.style.fontSize = 40 + "px";
};

function printErrorMessage(){
  document.result.innerText = "Error";
}

function del(){
  result.value = " "
}

function calculatorFunction(){
  
}
