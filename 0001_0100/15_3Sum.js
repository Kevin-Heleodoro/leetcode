// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

/**
 * Approach 1:
 * Time: O(n log n) + O(n ^ 2) = O(n ^ 2)
 * Space: O(1) || O(n)
 */

const threeSum = function (nums, sums = []) {
	nums.sort((a, b) => a - b);

	for (let first = 0; first < nums.length - 2; first++) {
		if (isPrevDuplicate(nums, first)) continue;

		const [target, left, right] = [
			-nums[first],
			first + 1,
			nums.length - 1,
		];

		search(nums, target, left, right, sums);
	}

	return sums;
};

const isPrevDuplicate = (nums, index) => nums[index - 1] === nums[index];
const isNextDuplicate = (nums, index) => nums[index + 1] === nums[index];

const search = (nums, target, left, right, sums) => {
	while (left < right) {
		const [leftVal, rightVal] = [nums[left], nums[right]];
		const sum = leftVal + rightVal;

		const isTarget = sum === target;

		if (isTarget) {
			sums.push([-target, leftVal, rightVal]);
			left++;
			right--;

			while (left < right && isPrevDuplicate(nums, left)) left++;
			while (left < right && isNextDuplicate(nums, right)) right--;

			continue;
		}

		const isTargetGreater = sum < target;
		if (isTargetGreater) left++;

		const isTargetLess = target < sum;
		if (isTargetLess) right--;
	}
};

let input = [-1, 0, 1, 2, -1, -4];
// [[-1,-1,2],[-1,0,1]]

// let input = [0,1,1]
// Output: []

// let input = [0,0,0]
// Output: [[0,0,0]]

console.log(threeSum(input));
