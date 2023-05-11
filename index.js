const stringLength = (string) => {
  if (string.length <= 10 && string.length > 0) {
    return string.length;
  } else {
    return -1;
  }
  
};

const reverseString = (string) => {
  return string.split('').reverse().join('');
};

const calculatorObject = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  divide: (a, b) => {
    if (b !== 0) return a/b;
    else return undefined;
  },
  multiply: (a,b) => {
    return a*b;
  },
}

class CalculatorClass {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    if (b !== 0) return a/b;
    else return undefined;
  }

  multiply(a, b) {
    return a * b;
  }
}

const classcal = new CalculatorClass;

const capfirst = (str) => {
  return str.charAt(0).toUpperCase() + str.substring(1);
}

export {reverseString};
export {stringLength};
export {calculatorObject};
export {classcal};
export {capfirst};