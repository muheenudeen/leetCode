
function large(num){
 
    return Math.max(...num)

}

console.log(large([1,5,4,3,6]));


//reverse

function reverse(str){
    return str.split('').reverse().join('')
}

console.log(reverse("java script"));


//remove duplicat from arry

function removedupli(num){
    return [...new Set(num)]
}

console.log(removedupli([1,2,2,1,3,4]));


//flat nested arry

function flat(arry){

    return arry.flat(Infinity)
}

console.log(flat([1, [2, [3, 4]], 5])); // Output: [1, 2, 3, 4, 5]



//odd even

function oddAndEven(num){
    return num%2===0 ? "even" : "odd"
}
console.log(oddAndEven(5));


//reverce arry

function reverce(arr){
    const result=[]
    for(let i=arr.length-1;i>=0;i--){
        result.push(arr[i])
    }
    return result
}

console.log(reverce([1,2,3,4,54]));
