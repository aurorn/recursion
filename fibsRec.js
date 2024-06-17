function fibsRec(num, fibArray = [0, 1]) {
    if (num <= 0) return [];
    if (num === 1) return [0];
    if (fibArray.length >= num) return fibArray.slice(0, num);
  
    fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
    return fibsRec(num, fibArray);
  }

console.log(fibsRec(8)); 
console.log(fibsRec(10)); 
console.log(fibsRec(0));  
console.log(fibsRec(1)); 
console.log(fibsRec(2));  