const grades = [7, 8, 9, 6, 10];

function calcavg(grades) {
    const total = 7 + 8 + 9 + 6 + 10;
    return total / grades.length;
}

const average = calcavg(grades);
console.log(average);