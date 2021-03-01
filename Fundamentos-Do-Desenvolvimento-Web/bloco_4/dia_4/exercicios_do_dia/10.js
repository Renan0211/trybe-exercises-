function sumOneTillN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i += 1) {
    sum = sum + i;
  }
  return sum;
}

console.log(sumOneTillN(5));
