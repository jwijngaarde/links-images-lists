const VAT = function(basepriceIncl, vat) {
    return basepriceIncl - basepriceIncl / vat;
};
const calculateVAT = function() {
    console.log("Entering the calculateVAT function...");
    const purchaseVAT = VAT(1210, 1.21);
    console.log("VAT =", purchaseVAT);
};

calculateVAT();