let displayValue = "";
let scientificMode = false;

function toggleScientificMode() {
    scientificMode = !scientificMode;
    if (scientificMode) {
        document.querySelector('#display').value = 'Scientific';
    } else {
        document.querySelector('#display').value = '';
    }
}

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = displayValue;
}

function calculateResult() {
    try {
        // Evaluate expressions with or without scientific functions
        if (scientificMode) {
            // Handle scientific functions here (e.g., trigonometric functions)
            displayValue = displayValue.replace(/sin\(/g, 'Math.sin(');
            displayValue = displayValue.replace(/cos\(/g, 'Math.cos(');
            displayValue = displayValue.replace(/tan\(/g, 'Math.tan(');
        }

        displayValue = eval(displayValue);
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function calculateSquareRoot() {
    try {
        displayValue = Math.sqrt(eval(displayValue));
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function calculateSquare() {
    try {
        displayValue = Math.pow(eval(displayValue), 2);
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function calculateCube() {
    try {
        displayValue = Math.pow(eval(displayValue), 3);
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function calculateSin() {
    try {
        displayValue = Math.sin(eval(displayValue));
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function calculateCos() {
    try {
        displayValue = Math.cos(eval(displayValue));
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function calculateTan() {
    try {
        displayValue = Math.tan(eval(displayValue));
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
