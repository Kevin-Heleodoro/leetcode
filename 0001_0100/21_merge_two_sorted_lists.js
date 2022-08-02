// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Approach 1:
 * Time: O(n)
 * Space: O(1)
 */

const mergeTwoLists = function (list1, list2) {
	let nullNode = { val: 0, next: null };
	let prev = nullNode;

	while (list1 && list2) {
		if (list1.val >= list2.val) {
			prev.next = list2;
			list2 = list2.next;
		} else {
			prev.next = list1;
			list1 = list1.next;
		}
		prev = prev.next;
	}
	prev.next = list1 || list2;
	return nullNode.next;
};

let list1 = [1, 2, 4],
	list2 = [1, 3, 4];
// Output: [1,1,2,3,4,4]

// let list1 = [], list2 = []
// Output: []

// let list1 = [], list2 = [0]
// Output: [0]

console.log(mergeTwoLists(list1, list2));
