// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Approach 1
 * Time: O(n)
 * Space: O(1)
 */

// const maxDepth = function (root) {
// 	let maxDepth = 0;

// 	let DepthFirstSearch = (node, depth) => {
// 		if (!node) return maxDepth;

// 		if (depth > maxDepth) {
// 			maxDepth = depth;
// 		}

// 		DepthFirstSearch(node.right, depth + 1);
// 		DepthFirstSearch(node.left, depth + 1);
// 	};

// 	DepthFirstSearch(root, 1);

// 	return maxDepth;
// };

/**
 * Approach 2
 * Time: O(n)
 * Space: O(1)
 */

// const maxDepth = function (root) {
// 	if (!root) return 0;

// 	return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
// };

let root = [3, 9, 20, null, null, 15, 7];
// Output: 3

// let root = [1,null,2]
// Output: 2

console.log(maxDepth(root));
