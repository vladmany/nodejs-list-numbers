const M = 5; // от
const N = 20; // до

let numbers = Array.from({ length: N - M + 1 }, (_, index) => M + index);
console.log(numbers);