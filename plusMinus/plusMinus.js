function plusMinus(arr) {
    let postiveRatio = 0;
    let negativeRatio = 0;
    let zerosRatio = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) postiveRatio++
        if (arr[i] < 0) negativeRatio++
        if (arr[i] === 0) zerosRatio++
    }
    return `${(postiveRatio/arr.length).toPrecision(6)}
${(negativeRatio/arr.length).toPrecision(6)}
${(zerosRatio/arr.length).toPrecision(6)}`
}

console.log(plusMinus([1, 1, 0, -1, -1]))