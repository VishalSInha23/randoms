// leetcode 239 (https://leetcode.com/problems/sliding-window-maximum/)

function maxSlidingWindow(nums, k) {
  const res = []
  const dq = []
  let head = 0

  for (let i = 0; i < nums.length; i++) {
    if (head < dq.length && dq[head] <= i - k) head++
    while (dq.length > head && nums[dq.at(-1)] <= nums[i]) dq.pop()

    dq.push(i)

    if (i >= k - 1) res.push(nums[dq[head]])
  }

  return res
}

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))
