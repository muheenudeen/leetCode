var findComplement = function (num) {

    let mask = num;
    
    for (const k of [1, 2, 4, 8, 16]) {

        mask |= (mask >> k);
    }

    return mask ^ num;
};
