
// Function to calculate the grade based on average marks
function calculateGrade(averageMarks) {
    if (averageMarks >= 80 && averageMarks <= 100) {
        return 'A';
    }
    if (averageMarks >= 70 && averageMarks < 80) {
        return 'B';
    }
    if (averageMarks >= 60 && averageMarks < 70) {
        return 'C';
    }
    if (averageMarks >= 50 && averageMarks < 60) {
        return 'D';
    }
    if (averageMarks >= 0 && averageMarks < 50) {
        return 'E';
    }
}

// Function to calculate the average of three marks
function calculateAverage(mark1, mark2, mark3) {
    return (mark1 + mark2 + mark3) / 3;
}

// Prompting user for information
let fullName = prompt("Enter student's full name:");
let courseName = prompt("Enter course name:");
let mark1input = prompt("Enter marks for subject 1 (0-100):");
let mark2input = prompt("Enter marks for subject 2 (0-100):");
let mark3input = prompt("Enter marks for subject 3 (0-100):");

// Input validation
if (!fullName || !courseName || !mark1input || !mark2input || !mark3input) {
    alert("Please fill in all fields.");
} else {

    // Convert input to numbers
    let mark1 = parseFloat(mark1input);
    let mark2 = parseFloat(mark2input);
    let mark3 = parseFloat(mark3input);

    // Check for invalid marks
    if (
        isNaN(mark1) || isNaN(mark2) || isNaN(mark3) ||
        mark1 < 0 || mark1 > 100 ||
        mark2 < 0 || mark2 > 100 ||
        mark3 < 0 || mark3 > 100
    ) {
        alert("Please enter valid marks between 0 and 100.");

    } else {

        // Calculate average and grade
        let averageMarks = calculateAverage(mark1, mark2, mark3);
        let grade = calculateGrade(averageMarks);

        // Display results
        let resultMessage = `Student Name: ${fullName}
Course Name: ${courseName}
Average Marks: ${averageMarks.toFixed(2)}
Grade: ${grade}`;

        console.log(resultMessage);
        alert(resultMessage);
    }
}
