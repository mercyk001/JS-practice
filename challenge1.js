
function studentGradeGenerator(marks) {
    if (marks > 100 || marks < 0) {
        return 'Invalid marks entered. Please enter marks between 0 and 100.';
    } else if (marks > 79) {
        return 'A';
    } else if (marks >= 60) {
        return 'B';
    } else if (marks >= 49) {
        return 'C';
    } else if (marks >= 40) {
        return 'D';
    } else {
        return 'E';
    }
}

const marks = 85; 
console.log("Grade: " + studentGradeGenerator(marks));