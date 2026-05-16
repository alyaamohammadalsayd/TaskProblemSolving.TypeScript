# TaskProblemSolving.TypeScript
Problem1:
We have an image represented as a two‑dimensional array img[][], where each element represents the color of a pixel.
We want to apply the Flood Fill algorithm starting from the pixel (sr, sc) and change its color — along with the color of every connected pixel that has the same original color.
Pixels are considered connected only:
Horizontally (left/right)
Vertically (up/down)
1-We read the original color of the pixel at (sr, sc).
2-If the new color is the same as the original color, then we don’t need to do anything.
3-We use a DFS algorithm to visit all connected pixels.
4-We change the color of every pixel that has the same original color.
5-We repeat the process for the four directions: up, down, left, and right.
_____________________________________________________________________
Problem2:
We have an array that represents the heights of buildings. After it rains, water can get trapped between the buildings.
We want to calculate the total amount of trapped water.
Water trapped above each building is determined by checking:
-There is a taller building on the left.
-There is a taller building on the right.
-The amount of water above each building is:
min(leftMax, rightMax) - height[i]
Steps:
1-Create an array leftMax[] that stores the highest building to the left of each index.
2-Create an array rightMax[] that stores the highest building to the right of each index.
3-For each index:Calculate the trapped water above it.
4-Sum all the values.