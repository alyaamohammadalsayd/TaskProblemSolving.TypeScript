const rodCutting = (price: number[], n: number): number => {
  const dp = new Array(n + 1).fill(0);

  for (let length = 1; length <= n; length++) {
    let maxVal = 0;

    for (let cut = 1; cut <= length; cut++) {
      maxVal = Math.max(maxVal, price[cut] + dp[length - cut]);
    }

    dp[length] = maxVal;
  }

  return dp[n];
};
