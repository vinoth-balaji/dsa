let exp = "2+(5-3*6/2)";

let prefix_operands = [];
let postfix_operands = [];
let operators = [];
function precedence(op) {
  if (op == "+" || op == "-") return 1;
  else if (op == "*" || op == "/") return 2;
}

function evaluate(a, b, op, type) {
  if (type == "prefix") {
    return op + "" + a + "" + b;
  } else return a + "" + b + "" + op;
}

function operation(stack, type, op) {
  let b = stack.pop();
  let a = stack.pop();

  stack.push(evaluate(a, b, op, type));
}

for (let i = 0; i < exp.length; i++) {
  let ch = exp[i];

  if (ch == "(") operators.push(ch);
  else if (ch == ")") {
    while (operators[operators.length - 1] != "(") {
      let op = operators.pop();
      operation(prefix_operands, "prefix", op);
      operation(postfix_operands, "postfix", op);
    }
    operators.pop();
  } else if (ch == "+" || ch == "-" || ch == "*" || ch == "/") {
    while (
      operators[operators.length - 1] != "(" &&
      precedence(ch) <= precedence(operators[operators.length - 1])
    ) {
      let op = operators.pop();
      operation(prefix_operands, "prefix", op);
      operation(postfix_operands, "postfix", op);
    }

    operators.push(ch);
  } else {
    prefix_operands.push(parseInt(ch));
    postfix_operands.push(parseInt(ch));
  }
}

while (operators.length != 0) {
  let op = operators.pop();
  operation(prefix_operands, "prefix", op);
  operation(postfix_operands, "postfix", op);
}

console.log(prefix_operands[prefix_operands.length - 1]);
console.log(postfix_operands[prefix_operands.length - 1]);
