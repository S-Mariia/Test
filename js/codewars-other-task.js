function isPrime(number) {
    if (number < 2) return false;

    for (let i = 2; i < number; i += 1) {
        if (number % i === 0) return false;
    }

    return true;
}

function getPrimes(start, finish) {
    const arrOfNumb = range(start, finish);
    return arrOfNumb.filter(numb => isPrime(numb));
}

function range(start, finish) {
    if (start <= finish) {
        return Array(finish - start + 1).fill().map((_, idx) => start + idx);
    }
    return range(finish, start);
}

console.log(getPrimes(0, 0));


// isPrime(0); // === false
// isPrime(1); // === false
// isPrime(2); // === true
// isPrime(3); // === true
// isPrime(4); // === false
// isPrime(5); // === true 

// getPrimes(0, 0); // === []
// getPrimes(0, 30); // === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
// getPrimes(30, 0); // === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]