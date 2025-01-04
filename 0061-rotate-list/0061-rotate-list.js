var rotateRight = function(head, k){
    let length = 1 
    let pt = head
    while(pt && pt.next){
          length++
          pt = pt.next 
          }

    k = k % length 
    
    if(k === 0){
        return head 
    } 
    
    let newTail = head
    let spaces = length - k 
    while(spaces > 1){
        spaces--
        newTail = newTail.next  
          }
    
    let newHead = newTail.next 
    newTail.next = null
    pt.next = head
    return newHead  
}
