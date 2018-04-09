/*
Is Prime
Define a function isPrime/is_prime() that takes one integer argument and returns true/True or false/False depending on if the integer is a prime.

Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Assumptions
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
*/

const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if(num % i === 0){
      return false
    }
  }
  return num > 1;
};
module.exports = isPrime;
