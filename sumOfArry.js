

function sum(num){
    return num.reduce((sum,value)=>sum+value,0)
}

console.log(sum([1, 2, 3, 4])); // Output: 10
