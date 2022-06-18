
let result = document.getElementById("result");
let showNumbers = (number) => {
  result.value = result.value + number;
  result.style.fontSize = 40 + "px";
};

let equalFunction = ()=>{
  try{
    result.value=eval(result.value)
  }
  catch(err){
    alert('Enter a valid result');
  }
}
function del(){
  result.value = " "
}
