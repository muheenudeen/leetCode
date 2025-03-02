var recoverTree = function (root) {

    let small = null, big = null, prev = null;
    let inorder = function (r) {

        if (r == null) return;
        inorder(r.left);
        if (prev && prev.val > r.val) {

            small = r;
            if (big) return;
            big = prev;
        }
        prev = r;
        inorder(r.right);
        return;
    }
    
    inorder(root);
    [small.val, big.val] = [big.val, small.val];
};