// You are given an array prices where prices[i] is the price of a given stock on the nth day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

/**
 * Approach 1: FAILS TIME LIMIT
 * Time: O(n ^ 2)
 * Space: O(n)
 */

// const maxProfit = function (prices) {
// 	let profit = 0;

// 	for (let i = 0; i < prices.length; i++) {
// 		for (let j = i + 1; j < prices.length; j++) {
// 			if (prices[j] - prices[i] > profit) {
// 				profit = prices[j] - prices[i];
// 			}
// 		}
// 	}

// 	return profit;
// };

/**
 * Approach 2:
 * Time: O(n)
 * Space: O(1)
 */

const maxProfit = function (prices) {
	let [left, right, max] = [0, 1, 0];

	while (right < prices.length) {
		const canSlide = prices[right] <= prices[left];

		if (canSlide) {
			left = right;
		}

		const window = prices[right] - prices[left];

		max = Math.max(max, window);
		right++;
	}

	return max;
};

let prices = [7, 1, 5, 3, 6, 4];
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// let prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

console.log(maxProfit(prices));
