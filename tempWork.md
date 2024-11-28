## 1. **Two Sum: Missing Evidence**  
**Scenario:**  
The evidence locker is in disarray, with items scattered everywhere. Somewhere in the chaos are two items that, when combined, unlock a critical clue. Quickly find the two items whose combined weight equals the target value!  

**Explanation:**  
Input is denoted by:  
- `nums`: A list of integers representing item weights.  
- `target`: An integer representing the combined weight to match.  

Your task is to return the indices of the two numbers in `nums` that add up to `target`. You may assume there is exactly one solution, and the same element cannot be used twice.  
For example, given `nums = [2, 7, 11, 15]` and `target = 9`, the output would be `[0, 1]` because `nums[0] + nums[1] = 2 + 7 = 9`.

**Example Case:**  
```plaintext
Input: nums = [2, 7, 11, 15], target = 9  
Explanation: nums[0] + nums[1] = 2 + 7 = 9.  
Expected Output: [0, 1]
