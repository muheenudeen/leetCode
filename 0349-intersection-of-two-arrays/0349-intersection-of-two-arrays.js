/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {

    nums1.sort();
    nums2.sort();

    const conflict =[];

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if(nums1[i] === nums2[j] && !conflict.includes(nums1[i])){
                conflict.push(nums1[i]);
            }
        }
    }
    return conflict;
};