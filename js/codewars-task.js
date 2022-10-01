
function rolldice_sum_prob(sum, n) {

    let initialArr = [[1], [2], [3], [4], [5], [6]];
    let currentArr = [];

    function addOneMoreCoordinate(arr) {
    const resultArr = [];

    arr.forEach((item) => {
    for (let i = 1; i <= 6; i += 1){
        item.push(i);
        const newItem = [...item];
        newItem.splice(-i, i - 1);
        resultArr.push(newItem);
    }
    })
    
    return resultArr;
}

function createAllPossibleCombination(n) {
    currentArr = addOneMoreCoordinate(initialArr);

    if (n <= 2) {
        return currentArr;
    } 

    initialArr = currentArr;
    return createAllPossibleCombination(n - 1);
}

    const mainArr = createAllPossibleCombination(n);
    
    const numberOfSuitableVariants = mainArr.filter(item =>
        item.reduce((acc, num) => acc + num) === sum
    ).length;

    const allVariants = 6 ** n;
    return numberOfSuitableVariants / allVariants;
}


console.log(rolldice_sum_prob(8, 3));



// Когда мы бросаем 2 классических кубика (значения на каждой стороне от 1 до 6), мы получаем 36 (6 * 6) различных результатов.
// Мы хотим знать вероятность того, что сумма результатов будет равна 11. Для этого результата у нас есть только комбинация 6и 5. Итак, у нас будет два события: {5, 6} и {6, 5}.
// Таким образом, вероятность этого результата будет:
// P(11, 2) = 2/(6*6) = 1/18    (The two is because we have 2 dice)
// Теперь мы хотим вычислить вероятность того, что сумма будет равна 8. Комбинации для этого результата будут следующими: {4,4}, {3,5}, {5,3}, {2,6}, {6,2}всего пять комбинаций.
// P(8, 2) = 5/36
// Все может быть сложнее, если у нас будет больше кубиков и значения суммы выше.
// Мы хотим знать вероятность того, что сумма равна, 8но есть 3кости.
// Теперь комбинации и соответствующие события:
// {2,3,3}, {3,2,3}, {3,3,2}
// {2,2,4}, {2,4,2}, {4,2,2}
// {1,3,4}, {1,4,3}, {3,1,4}, {4,1,3}, {3,4,1}, {4,3,1}
// {1,2,5}, {1,5,2}, {2,1,5}, {5,1,2}, {2,5,1}, {5,2,1}
// {1,1,6}, {1,6,1}, {6,1,1}
// A total amount of 21 different combinations
// So the probability is:
// P(8, 3) = 21/(6*6*6) = 0.09722222222222222
// Суммируя случаи, которые мы видели с функцией, которая получает два аргумента
// rolldice_sum_prob(11, 2) == 0.0555555555 # or 1/18
// rolldice_sum_prob(8, 2) ==  0.13888888889# or 5/36
// rolldice_sum_prob(8, 3) == 0.0972222222222  # or 7/72
// И подумайте, почему у нас такой результат:
// rolldice_sum_prob(22, 3) == 0
// Создайте функцию rolldice_sum_prob()для этого вычисления.
// Желаем приятно провести время!
// (Результаты округлять не нужно)