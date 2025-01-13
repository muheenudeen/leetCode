var maxDepth = function(root) {
  if(!root) return 0;
  let maxDepthVal = currentDepthVal = 0;

  const countLevel = (node) => {
    if(!node) return maxDepthVal = Math.max(maxDepthVal, currentDepthVal);

    ++currentDepthVal
    countLevel(node.left)
    countLevel(node.right)
    
    --currentDepthVal;
  };

  countLevel(root);

  return maxDepthVal;
};