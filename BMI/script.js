function calculateBMI() {
    // Get input values
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    
    // Validate inputs
    if (weight <= 0 || height <= 0 || age <= 0 || gender === "") {
        alert("Please enter valid values for weight, height, age, and select your gender.");
        return;
    }
    
    // Calculate BMI
    const bmi = weight / (height * height);
    
    // Determine BMI category and set the appropriate class
    const result = document.getElementById('result');
    let category;
    if (bmi < 18.5) {
        category = "Underweight";
        result.className = "result underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
        result.className = "result normal";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
        result.className = "result overweight";
    } else {
        category = "Obese";
        result.className = "result obese";
    }
    
    // Display result
    result.innerHTML = `Your BMI is ${bmi.toFixed(2)} (${category})<br>Age: ${age}<br>Gender: ${gender.charAt(0).toUpperCase() + gender.slice(1)}`;
}
