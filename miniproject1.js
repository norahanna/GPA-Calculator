function calculateGPA(arr)
let sum = 0;
let count = arr.length;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'A') {
        sum += 4;
    } else if (arr[i] === 'B') {
        sum += 3;
    } else if (arr[i] === 'C') {
        sum += 2;
    } else if (arr[i] === 'D') {
        sum += 1;
    } else if (arr[i] === 'F') {
        sum += 0;
    } else {
        count--;
    }
}

const averageNumericGPA = sum / count;

let gpa;
if (averageNumericGPA >= 3.7) {
    gpa = 'A';
} else if (averageNumericGPA >= 3) {
    gpa = 'B';
} else if (averageNumericGPA >= 2) {
    gpa = 'C';
} else if (averageNumericGPA >= 1) {
    gpa = 'D';
} else {
    gpa = 'F';
}

return gpa;
}

const grades = ['A', 'B', 'C', 'D', 'F'];
const gpa = calculateGPA(grades);
console.log("Your GPA is:", gpa);