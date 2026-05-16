
const floodFill = (
  img: number[][],
  sr: number,
  sc: number,
  newColor: number,
): number[][] => {
  const originalColor = img[sr][sc];

  if (originalColor === newColor) return img;

  const rows = img.length;
  const cols = img[0].length;

  const dfs = (r: number, c: number): void => {
    if (r < 0 || r >= rows || c < 0 || c >= cols) return;

    if (img[r][c] !== originalColor) return;

    img[r][c] = newColor;

    dfs(r - 1, c); // up
    dfs(r + 1, c); // down
    dfs(r, c - 1); // left
    dfs(r, c + 1); // right
  };

  dfs(sr, sc);

  return img;
};

//test
const img = [
  [1, 1, 1, 0],
  [0, 1, 1, 1],
  [1, 0, 1, 1],
];

console.log(floodFill(img, 1, 2, 2));
