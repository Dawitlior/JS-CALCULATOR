let result = document.getElementById("result");
let showNumbers = (number) => {
  result.value += number;
  result.style.fontSize = 40 + "px";
};
let equalFunction = ()=>{
  if(true){
    result.value=eval(result.value)
  }
}
function del(){
  result.value = " "
}

