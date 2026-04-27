const isPalindrome = (str) => {
    const normaLized = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed = normaLized.split("").reverse().join("")

    if(reversed === normaLized){
        return true
    }{
        return false
    }
    
}


const isPalindromeTwoPointer = (str) => {
    const normaLized = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    let left = 0;
    let right =  normaLized.length - 1

    while(left < right){
        if(normaLized[left] !== normaLized[right]){
            return false
        }

        left++;
        right --;
    }
    return true
}

console.log(isPalindromeTwoPointer("A man, a plan , A canal: Panama"));

