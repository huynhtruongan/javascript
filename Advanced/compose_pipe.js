const compose = (f, g) => (data) => f(g(data));
const pipe = (f, g) => (data) => g(f(data));

const multiplyBy3 = (num) => num * 3;
const positive = (num) => Math.abs(num);

const multiplyBy3AndPositive = compose(multiplyBy3, positive);
const multiplyBy3AndPositive1 = pipe(multiplyBy3, positive);


multiplyBy3AndPositive(-50);
multiplyBy3AndPositive1(-50);

