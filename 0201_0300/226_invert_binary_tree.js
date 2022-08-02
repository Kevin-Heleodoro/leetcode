// Given the root of a binary tree, invert the tree, and return its root.

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
 * Time: O()
 * Space: O()
 */

const invertTree = function (root) {
	if (!root) return root;

	let left = root.left;
	root.left = invertTree(root.right);
	root.right = invertTree(left);

	return root;
};

let root = [4, 2, 7, 1, 3, 6, 9];
// Output: [4,7,2,9,6,3,1]

// let root = [2,1,3]
// Output: [2,3,1]

// let root = []
// Output: []

console.log(invertTree(root));
