const twoSum = (num, target) => {
    const numMap = new Map();

    for(let i = 0; i < num.length; i++){
        const currentNumber = num[i];
        const complement = target - currentNumber;

         if(numMap.has(complement)){
            return [numMap.get(complement), i]
         }

         numMap.set(currentNumber, i)

    }

    return undefined;
}


console.log(twoSum([2, 11, 7, 15], 9));
