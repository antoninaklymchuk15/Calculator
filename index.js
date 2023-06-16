let operation = prompt("Please choose operation: add, sub, mult, div ", "");
let num1 = prompt("Enter the first number", "");
let num2 = prompt("Enter the second number", "");
let num1Conv = Number(num1);
let num2Conv = Number(num2);
let result;
let final;

switch (operation) {
  case "add":
    result = num1Conv + num2Conv;
    expression = String(num1 + "+" + num2);
    break;

  case "sub":
    result = num1Conv - num2Conv;
    expression = String(num1 + "-" + num2);
    break;

  case "mult":
    result = num1Conv*num2Conv;
    expression = String(num1 + "*" + num2);
    break;

  case "div":
    result = num1Conv/num2Conv;
    expression = String(num1 + "/" + num2);
    break;


}

alert(`Result: ${expression}=${result}`);
