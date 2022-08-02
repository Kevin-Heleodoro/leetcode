// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Approach 1:
 * Time: O(n)
 * Space: O(1)
 */

const diameterOfBinaryTree = function (root) {
	let diameter = 0;

	function dfs(root) {
		if (!root) return -1;

		const left = dfs(root.left);
		const right = dfs(root.right);

		diameter = Math.max(diameter, 2 + left + right);

		return 1 + Math.max(left, right);
	}

	dfs(root);

	return diameter;
};
