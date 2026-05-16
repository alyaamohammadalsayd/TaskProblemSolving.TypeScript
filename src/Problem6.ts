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

      const area = arr[top] * width;
      maxArea = Math.max(maxArea, area);
    }
  }

  while (stack.length > 0) {
    const top = stack.pop()!;
    const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
    const area = arr[top] * width;
    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
};

//test
console.log(largestRectangle([6, 2, 5, 4, 5, 1, 6])); 
