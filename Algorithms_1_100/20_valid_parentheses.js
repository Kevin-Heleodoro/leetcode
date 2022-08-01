// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

/**
 * Approach 1:
 * Time: O(n)
 * Space: O(n)
 */

// const isValid = function (s) {
// 	const stack = [];
// 	const pairs = {
// 		'{': '}',
// 		'(': ')',
// 		'[': ']',
// 	};

// 	for (let i = 0; i < s.length; i++) {
// 		let current = s[i];

// 		if (pairs[current]) {
// 			stack.push(pairs[current]);
// 		} else if (current !== stack.pop()) {
// 			return false;
// 		}
// 	}

// 	return !stack.length;
// };

/**
 * Approach 2"
 * Time: O(n)
 * Space: O(n)
 */

const isValid = function (s) {
	let stack = [];
	let pairs = {
		'}': '{',
		')': '(',
		']': '[',
	};

	if (!s) return false;

	for (let i = 0; i < s.length; i++) {
		let current = s[i];

		if (pairs[current]) {
			const topElement = stack.length === 0 ? '#' : stack.pop();
			if (topElement !== pairs[current]) {
				return false;
			}
		} else {
			stack.push(current);
		}
	}

	return stack.length === 0;
};

// let s = '()';
// Output: true

// let s = "()[]{}"
// Output: true

// let s = '(]';
// Output: false

let s = '{[]}';
// Output: true

console.log(isValid(s));
