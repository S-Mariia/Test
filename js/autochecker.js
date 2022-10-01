function changeEven(numbers, value) {
  // Change code below this line
  const newNumbers = [...numbers];

    newNumbers.reduce((resultArr, item) => {
        if (item % 2 === 0) {
            resultArr.push(item + value);
            return resultArr;
        }
        resultArr.push(item);
        return resultArr
    }, []);

//   for (let i = 0; i < newNumbers.length; i += 1) {
//     if (newNumbers[i] % 2 === 0) {
//       newNumbers[i] = newNumbers[i] + value;
//     }
//   }
//   return newNumbers;
  // Change code above this line
}

// console.log(changeEven([1, 2, 3, 4, 5], 10));