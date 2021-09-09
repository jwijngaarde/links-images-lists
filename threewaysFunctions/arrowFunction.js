const z = (number) => {
    let x = number ** 2;
    let y = x + x;
    let z = y * y;

    return z;
};

console.log(z(6));