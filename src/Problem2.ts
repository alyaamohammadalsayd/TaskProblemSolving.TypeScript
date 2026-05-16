/** @format */

const trapWater = (arr: number[]): number => {
  const n = arr.length;

  if (n < 3) return 0;
  const leftMax: number[] = new Array(n);
  const rightMax: number[] = new Array(n);

  leftMax[0] = arr[0];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], arr[i]);
  }

  rightMax[n - 1] = arr[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], arr[i]);
  }

  let trapped = 0;

  arr.forEach((height, i) => {
    const waterAbove = Math.min(leftMax[i], rightMax[i]) - height;
    if (waterAbove > 0) trapped += waterAbove;
  });

  return trapped;
};

//test
const arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trapWater(arr));
