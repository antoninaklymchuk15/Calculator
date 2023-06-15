let operation = prompt("Please choose operation: add, sub, mult, div ", "");
let num1 = prompt("Enter the first number", "");
let num2 = prompt("Enter the second number", "");
let result;
let final;

switch (operation) {
  case "add":
    result = Number(num1) + Number(num2);
    expression = String(num1 + "+" + num2);
    break;

  case "sub":
    result = Number(num1) - Number(num2);
    expression = String(num1 + "-" + num2);
    break;

  case "mult":
    result = Number(num1)*Number(num2);
    expression = String(num1 + "*" + num2);
    break;

  case "div":
    result = Number(num1)/Number(num2);
    expression = String(num1 + "/" + num2);
    break;


}

alert(`Result: ${expression}=${result}`);
