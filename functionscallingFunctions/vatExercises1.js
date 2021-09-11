const price = function(basePrice, VAT) {
    return basePrice * VAT;
};
const calculate = function() {
    console.log("Entering the calculate function...");
    const purchase = price(100, 1.21);
    console.log(purchase);
};

calculate();