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
_______________________________________________________________________
Problem3:
A person wants to climb n steps.
They can climb: One step Or two steps
We want to calculate the number of different ways to reach the top.
The number of ways to climb n steps is:
ways(n) = ways(n - 1) + ways(n - 2)
_______________________________________________________________________
Problem4:
array arr[], where each element represents the maximum number of steps you can jump from that position.
-Determine whether it is possible to reach the last index of the array.
We return: -true → if we can reach the end
           -false → if it is impossible to reach the end
-We track the farthest position we can reach so far, called maxReach.
-As we iterate through the array:
1-If we reach an index that is greater than maxReach, it means we are stuck and cannot move forward → return false.
2-If maxReach reaches or passes the last index, we return true.
3-At each step, we update maxReach:
maxReach = Math.max(maxReach, i + arr[i])
_______________________________________________________________________
Problem5:
-We have a rod of length n, and an array price[] where price[i] represents the price of a piece of length i.
-If you have a rod of length n, you have two choices:
-Sell the whole rod for price[n]
-Cut it into two pieces: 1-One piece of length i
                         2-And the other piece of length n - i
Then add their profits together
Since we want the maximum profit, we try all possible cuts.
This makes the solution depend on: max(price[i] + best(n - i)).
_______________________________________________________________________
Problem6:
We have a histogram made of adjacent bars, and each bar has a certain height.
We want to find the largest rectangular area that can be formed inside this histogram, using only consecutive bars.
Steps:
-We iterate through the bars one by one.
-As long as the current bar is higher than the bar on top of the stack, we push it onto the stack.
-If the current bar is lower, we start popping bars from the stack.
-For each bar we pop, we calculate the largest rectangle where this bar is the shortest height.
-Area Formula : height * width
The width is determined using:
-The current index
-The index of the bar on top of the stack after popping
_______________________________________________________________________