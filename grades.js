let scores = [50, 61, 71, 81, 91];
let grades = {A:0, B:0, C:0, D:0, F:0};

for (let i = 0; i < scores.length; i++) {
    if (scores[i] <= 60) {
        grades.F += 1;
    } else if (scores[i] <= 70) {
        grades.D += 1;
    } else if (scores[i] <= 80) {
        grades.C += 1;
    } else if (scores[i] <= 90) {
        grades.B += 1;
    } else {
        grades.A += 1;
    }
}

console.info(grades);