function getPyramidArea(length, width, height) {
    let baseArea = length * width;
    let pyramidVolume = 1 / 3 * baseArea * height;
    return pyramidVolume;
}

let area1 = getPyramidArea(2, 2, 3);
let area2 = getPyramidArea(4, 4, 3);
console.log('Area 1 = ' + area1 + ' , area2 = ' + area2);
