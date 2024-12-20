/* 
write js code which can give grades to students according to their scores 
80-100 - A
70-79 - B
60-69 - C
50-59 - D
0-49 - F
*/

// Solution:
let score = 85; // Example score

let grade;
if (score >= 80 && score <= 100) {
    grade = 'A';
} else if (score >= 70 && score <= 79) {
    grade = 'B';
} else if (score >= 60 && score <= 69) {
    grade = 'C';
} else if (score >= 50 && score <= 59) {
    grade = 'D';
} else if (score >= 0 && score <= 49) {
    grade = 'F';
} else {
    grade = 'Invalid score';
}

console.log(`The grade is ${grade}`);