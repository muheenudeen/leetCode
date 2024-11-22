function vowesl(str){

    const vowels="aeiouAEIOU"

return [...str].filter(char=>vowels.includes(char)).length

}

console.log(vowesl("hello world"));


//is prime

function prime(num){
    if(num<=1) return false

    for(let i=2;i<Math.sqrt(num);i++){
        if(num%i === 0) return false
    }
    return true
}

console.log(prime(7));


//seen duplicat arr

function seeDupli(arr){
    const seen=new Set()
    const duplicates=new Set()

    for(let num of arr){
        if(seen.has(num)) duplicates.add(num)

            else seen.add(num)
    }
    return [...duplicates]
}

console.log(seeDupli([1,2,3,4,2,2,1,1,]));
