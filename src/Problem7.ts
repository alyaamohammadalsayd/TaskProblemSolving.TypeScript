const largestRectangle = (arr: number[]): number => {
  const stack: number[] = [];
  let maxArea = 0;
  let i = 0;

  while (i < arr.length) {
    if (stack.length === 0 || arr[i] >= arr[stack[stack.length - 1]]) {
      stack.push(i);
      i++;
    } else {
      const top = stack.pop()!;
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, arr[top] * width);
    }
  }

  while (stack.length > 0) {
    const top = stack.pop()!;
    const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
    maxArea = Math.max(maxArea, arr[top] * width);
  }

  return maxArea;
};

const maxRectangleOfOnes = (mat: number[][]): number => {
  if (mat.length === 0) return 0;

  const cols = mat[0].length;
  const heights = new Array(cols).fill(0);
  let maxArea = 0;

  for (let r = 0; r < mat.length; r++) {
    for (let c = 0; c < cols; c++) {
      heights[c] = mat[r][c] === 1 ? heights[c] + 1 : 0;
    }
    maxArea = Math.max(maxArea, largestRectangle(heights));
  }

  return maxArea;
};

//test
const mat = [
  [0, 1, 1, 0],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 0, 0],
];

console.log(maxRectangleOfOnes(mat));
