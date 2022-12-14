// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

/**
 * Approach 1:
 * Time: O(n)
 * Space: O(n)
 */

// const hasCycle = function (head) {
// 	let set = new Set();

// 	while (head) {
// 		if (set.has(head)) {
// 			return true;
// 		} else {
// 			set.add(head);
// 			head = head.next;
// 		}
// 	}
// 	return false;
// };

/**
 * Approach 2:
 * Time: O(n)
 * Space: O(1)
 */

const hasCycle = function (head) {
	let slow = head,
		fast = head;

	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;

		if (slow === fast) {
			return true;
		}
	}
	return false;
};
