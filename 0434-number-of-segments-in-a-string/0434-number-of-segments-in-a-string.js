/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let count = 0;
    let foundChar = false;

    for(let i = 0; i < s.length; i++){
      if(s[i] === " " && foundChar) {
        count++;
        foundChar = false;
      }

      if(s[i] !== ' ') foundChar = true;

      if(i === s.length-1 && foundChar) count++;
    }

    return count;
};