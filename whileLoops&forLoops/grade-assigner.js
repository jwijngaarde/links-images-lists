function assignGrade(score) {
    if (score > 90) {
        return "A";
    } else if (score > 80) {
        return "B";
    } else if (score > 70) {
        return "C";
    } else if (score > 65) {
        return "D";
    } else {
        return "F";
    }
}

for (let i = 0; i <= 100; i++) {
    console.log("For scoring " + i + " points, you get a " + assignGrade(i));
}

function assignGrade(score) {
    if (score > 90) return "A";
    if (score > 80) return "B";
    if (score > 70) return "C";
    if (score > 65) return "D";
    return "F";
}