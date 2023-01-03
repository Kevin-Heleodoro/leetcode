// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const isBalanced = function (root) {
	function depthChecker(root) {
		if (!root) return 0;

		let depth;

		let left = 1 + depthChecker(root.left);
		let right = 1 + depthChecker(root.right);

		if (left >= right) {
			depth = left - right;
		} else {
			depth = right - left;
		}

		return height++;
	}

	let height = depthChecker(root);

	return height > 1;
};
