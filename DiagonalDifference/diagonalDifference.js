function diagonalDifference(arr) {
    let sumOfLeftDiagonal = 0;
    let sumOfRightDiagonal = 0;
    for (let i = 0; i < arr.length; i++) {
        sumOfLeftDiagonal = arr[i][0 + i] + sumOfLeftDiagonal;
        sumOfRightDiagonal = arr[i][arr[i].length - 1 - i] + sumOfRightDiagonal;
    }
    return Math.abs(sumOfRightDiagonal - sumOfLeftDiagonal);
}

console.log(diagonalDifference([[1, 2, 3], [4, 5, 6], [9, 8, 9]]));