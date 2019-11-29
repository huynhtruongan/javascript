const multiply = (a, b) => a*b;

const curriedMultiply = (a) => (b) => a*b;
const curriedMultiplyBy5 = curriedMultiply(5);
const curriedPartial = multiply.bind(null, 5);
curriedPartial(4);
curriedMultiplyBy5(4);
// NOTE: Safe memory