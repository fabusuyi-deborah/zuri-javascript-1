var first = window.prompt("Enter First Number");
var second = window.prompt("Enter Second Number");
var operator = window.prompt("Enter Operator:");
calculate();

function calculate(){
  if (operator == "+"){
    var result = parseInt(first) + parseInt(second);
    alert (first +" +" + second + " = "+ result);
  }
  else if (operator == "-"){
    var result= parseInt(first) - parseInt(second);
    alert (first +" -" +second +" =" +result);
  }
    else if (operator == "*"){
      var result= parseInt(first) * parseInt(second);
    alert (first +" *" +second +" =" +result);
    }
    else if (operator == "/"){
      var result= parseInt(first) /  parseInt(second);
    alert (first +" /" +second +" =" +result);
  }
  else{
    alert (operator +"is not a valid operator, try again")
  }
}