function bouncer(visitors, age) {
    var message;
    if (visitors > 1 && visitors < 75) {
        message = "Come in";
    } else if (visitors > 75 && visitors < 100) {
        message = "Come in";
    } else {
        message = "It's too busy now, come back later";
        if (age >= 18) {
            message = "Come in";
        } else {
            message = "This is a club for adults";
        }
        return message;
    }
}
var status = bouncer(99, 18);