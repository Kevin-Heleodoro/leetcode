// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
// To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.

// For example, the saying and conversion for digit string "3322251":
// two 3's, three 2's, one 5, and one 1
// 2 3 + 3 2 + 1 5 + 1 1
// 23321511

// Given a positive integer n, return the nth term of the count-and-say sequence.

/**
 * Approach 1:
 * Time: O(n^2)
 * Space: O(n)
 */

// const countAndSay = function (n) {
// 	let str = '1';

// 	for (let i = 1; i < n; i++) {
// 		let strArr = str.split('');
// 		console.log({ strArr });
// 		str = '';

// 		let count = 1;

// 		for (let j = 0; j < strArr.length; j++) {
// 			if (strArr[j] !== strArr[j + 1]) {
// 				str += count + strArr[j];
// 				count = 1;
// 				console.log({ str });
// 			} else {
// 				count++;
// 			}
// 		}
// 	}

// 	return str;
// };

/**
 * Approach 2:
 * Time: O(log n)
 * Space: O(n)
 */

// const countAndSay = function (n) {
// 	if (n === 1) return '1';

// 	return countAndSay(n - 1)
// 		.match(/1+|2+|3+/g)
// 		.reduce((acc, nums) => (acc += `${nums.length}${nums[0]}`), '');
// };

/**
 * Approach 3:
 * Time: O(log n)
 * Space: O(n)
 */

const countAndSay = (n, str = '1') => {
	if (n === 1) return str;

	let newStr = '';
	let count = 0;
	let say = str[0];

	for (let i = 0; i < str.length; i++) {
		if (str[i] === say) {
			count++;
		} else {
			newStr += count + say;
			count = 1;
			say = str[i];
		}
	}

	return countAndSay(n - 1, newStr + count + say);
};

// let input = 1;
// output = "1"

let input = 4;
// output = '1211'

console.log(countAndSay(input));
