function fibs(num) {
    if (num <= 0) return [];
    if (num === 1) return [0];
    if (num === 2) return [0, 1];
  
    const fibArray = [0, 1];
    for (let i = 2; i < num; i++) {
      fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }
    return fibArray;
  }

console.log(fibs(8));
console.log(fibs(10)); 
console.log(fibs(0)); 
console.log(fibs(1)); 
console.log(fibs(2));  