function arithmetic() {
  const operator = ["+", "-", "*", "/"];
  const maxValue = 11;

  function randomInteger(maxValue) {
    let rand = Math.random() * (maxValue - 1) + 1;
    rand = Math.floor(rand);
    return rand;
  }

  function arithmeticExpression() {
    let operand1 = randomInteger(maxValue);
    let operand2 = randomInteger(maxValue);
    let currentOperator = operator[randomInteger(3)];

    let formula = operand1 + currentOperator + operand2;
    return formula;
  }

  let currentFormula = arithmeticExpression();
  let result = function func(a) {
    return new Function("return" + " " + a)();
  };

  result(currentFormula);

  function compareFormula() {
    while (
      result(currentFormula) > 0 &&
      Number.isInteger(result(currentFormula))
    ) {
      let arr = [currentFormula, result(currentFormula)];
      return arr;
    }
    currentFormula = arithmeticExpression();
  }

  while (compareFormula() === undefined) {
    currentFormula = arithmeticExpression();
  }

  let arr = [currentFormula, result(currentFormula)];
  return arr;
}

export default arithmetic;
