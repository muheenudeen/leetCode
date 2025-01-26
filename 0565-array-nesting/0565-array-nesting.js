const arrayNesting = (nums) => {
    let result = 0;
    const obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] !== undefined) {continue;}
        obj[nums[i]] = 1;
        let curr = nums[nums[i]];
        while(nums[i] !== curr) {
            obj[nums[i]]++;
            obj[curr] = true;
            curr = nums[curr];
        }
        result = result < obj[nums[i]] ? obj[nums[i]] : result;
    }
    return result
};


