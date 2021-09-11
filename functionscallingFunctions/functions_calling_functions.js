const greeter = function(age) {
    console.log("Entering greeter...");
    let result;
    if (age >= 18) {
        result = true;
    } else {
        result = false;
    }
    return result;
};

const controller = function(age) {
    console.log("Entering controller...");
    if (greeter == true) {
        console.log("Hello there");
    } else {
        console.log("Hey Kiddo");
    }
    return greeter();
};
console.log(controller(17));