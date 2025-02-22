/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    return s.replace(/[^a-zA-Z0-9]/g, '').split('').join("").toLowerCase() === s.replace(/[^a-zA-Z0-9]/g, '').split('').reverse().join("").toLowerCase()
};