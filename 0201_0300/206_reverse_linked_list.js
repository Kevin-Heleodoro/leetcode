// Given the head of a singly linked list, reverse the list, and return the reversed list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**

/**
 * Approach 1:
 * Time: O(n)
 * Space: O(1)
 * */

// const reverseList = function (head) {
// 	let prev = null;

// 	while (head) {
// 		let next = head.next;
// 		head.next = prev;
// 		prev = head;
// 		head = next;
// 	}

// 	return prev;
// };

/**
 * Approach 2:
 * Time: O(n)
 * Space: O(n)
 */

// const reverseList = function (head) {
// 	if (!head) {
// 		return null;
// 	}

// 	let newHead = head;

// 	if (head.next) {
// 		newHead = reverseList(head.next);
// 		head.next.next = head;
// 	}

// 	head.next = null;

// 	return newHead;
// };

/**
 * Approach 3:
 * Time: O(n)
 * Space: O(n)
 */

const reverseList = function (head) {
	if (head == null || head.next == null) {
		return head;
	}

	let reversedHead = reverseList(head.next);

	head.next.next = head;
	head.next = null;

	return reversedHead;
};

let head = [1, 2, 3, 4, 5];
// Output: [5,4,3,2,1]

// let head = [1,2]
// Output: [2,1]

// let head = []
// Output: []

console.log(reverseList(head));
