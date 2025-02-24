/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let res = [];
    let n=columnNumber;
   while(n>0){
    n--;
    res.unshift(String.fromCharCode(65+(n%26)));
    n=Math.floor(n/26);
   }
   return res.join("");
};