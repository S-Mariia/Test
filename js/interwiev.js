const str = 'sdhbbvjhsdgvsvnbjkvhkbndbv';


// -----------------------------------------------------1 variant--------------------------------
// function objCreate(str) {
//     const arrOjSymb = str.split('');
//     const uniqueSymb = arrOjSymb.filter((item, idx, arr) => arr.indexOf(item) === idx);
//    let obj = { };
//     for (let i = 0; i < uniqueSymb.length; i += 1) {
//         obj = {
//             ...obj,
//             [uniqueSymb[i]]: arrOjSymb.filter(item => item === uniqueSymb[i]).length,
//         }
//     }
//     return obj;
// }

// -----------------------------------------------------2 variant--------------------------------
// function objCreate(str) {
//    let obj = { };
//     str.split('').forEach((item, idx, arr) => {
//         if (arr.indexOf(item) === idx) {
//             obj = {
//                 ...obj,
//                 [item]: 1,
//         } 
//         } else {
//             obj[item] += 1;  
//     }
// })
//     return obj;
// }


// -----------------------------------------------------3 variant--------------------------------
// function objCreate(str) {
//    return str.split('').reduce((acc, item, idx, arr) => { 
//         if (arr.indexOf(item) === idx) { return { ...acc, [item]: 1, } }
//         else { return {...acc, [item]: acc[item]+1} }
//     }, {})
// }

// -----------------------------------------------------4 variant--------------------------------

function objCreate(str) {
   return str.split('').reduce((acc, item) => { 
       if (acc.hasOwnProperty(item)) return {...acc, [item]: acc[item]+1} 
       else  return { ...acc, [item]: 1, } 
    }, {})
}

console.log(objCreate(str));






//---------------------------------------fizzbuzz-----------------------

// const fizzbuzz = num => { 
//     for (let i = 1; i <= num; i += 1) {
//         if (i % 15 === 0) {
//             console.log('fizzbuzz');
//             continue;
//         }
//         if (i % 5 === 0) {
//             console.log('buzz');
//             continue;
//         }
//         if (i % 3 === 0) {
//             console.log('fizz');
//             continue;
//         }
//         console.log(i);
//     }
// }

// console.log(fizzbuzz(19));

//-----------------------------------анаграма------------------------------
//+-


// const isItAnagrama = (str1, str2) => {
//     const arr1 = str1.toLowerCase().split('').sort();
//     const arr2 = str2.toLowerCase().split('').sort();

//     let result = true;

//     if (str1.length === str2.length) {
//         for (let i = 0; i < arr1.length; i += 1) {
//             if (arr1[i] !== arr2[i]) {
//                 result = false;
//                 break;
//             }
//         }
//     } else { result = false };

//     return result;
// }



// console.log(isItAnagrama('aDa12', '1a2ad'));



//------------------------------------------findVovels------------------------------------

// const findVowels = str => {
//     let quantity = 0;

//     str.toLowerCase().split("").forEach(item => {
//         if (item === 'a' || item === 'o' || item === 'e' || item === 'i' || item === 'u')
//             quantity += 1;
//     })

//     return quantity;
// }

// const findVowels = str => {
//     let quantity = 0;
//     const vowels = ['a', 'o', 'u', 'e', 'i']; 

//     for (const letter of str.toLowerCase()) {
//         if (vowels.includes(letter)) quantity += 1;
//     }

//     return quantity;
// }

// console.log(findVowels('hello'));


//--------------------------------------------fibonacci--------------------------------------

// побудувати послідовність Фібоначі
// const fibonacci = n => {
//     const sequence = [0, 1];

//     for (let i = 2; i < n; i += 1){
//         sequence.push(sequence[i - 1] + sequence[i - 2]);
//     }

//     return sequence;
// }




// побудувати послідовність Фібоначі (рекурсія)
// const fibonacci = n => {
//     const sequence = [0,1];

//     const buildSequence = num => {
//         sequence.push(sequence[n-num-2]+ sequence[n-num-1]);
//         return num < 2 ? sequence : buildSequence(num - 1);
//     }

//     buildSequence(n-2);
//     return sequence;
// }

// console.log(fibonacci(8));


// побудувати послідовність Фібоначі (рекурсія)
// const fibonacci = (n, arr) => {
//     arr.push(arr[arr.length-2]+arr[arr.length-1]);
//     return n <= 3 ? arr : fibonacci(n - 1, arr); 
// }
// console.log(fibonacci(8, [0,1]));


//n-тий елемент послідовності чисел Фібоначі
// const fibonacci = n => {
//     if (n < 2) return n;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }




// const fibonacci = n => {
//     const sequence = [0, 1];

//     for (let i = 2; i <= n; i += 1){
//         sequence.push(sequence[i - 1] + sequence[i - 2]);
//     }

//     return sequence[n];
// }
// console.log(fibonacci(6));



// program to display fibonacci sequence using recursion
// function fibonacci(num) {
//     if(num < 2) {
//         return num;
//     }
//     else {
//         return fibonacci(num-1) + fibonacci(num - 2);
//     }
// }