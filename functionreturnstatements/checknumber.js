function number(num) {
    var check = num > 100;
    if (check) {
        return "Number is bigger than 100";
    } else {
        return "Number is smaller than 100";
    }
}

console.log(number(25));
console.log(number(125));