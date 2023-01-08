/** Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
	const magazineLetters = {};

	for (let i = 0; i < magazine.length; i++) {
		let current = magazine[i];
		if (magazineLetters[current]) {
			magazineLetters[current]++;
		} else {
			magazineLetters[current] = 1;
		}
	}

	for (let i = 0; i < ransomNote.length; i++) {
		let current = ransomNote[i];
		if (magazineLetters[current] >= 1) {
			magazineLetters[current]--;
		} else {
			return false;
		}
	}

	return true;
};
