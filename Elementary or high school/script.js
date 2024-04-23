document.addEventListener('DOMContentLoaded', function() {
    // Validating input numbers
    function validateGradeInput(input) {
        var value = input.value.trim();
        if (!value.match(/^\d+$/) || value < 1 || value > 5) {
            input.setCustomValidity("Please enter a whole number between 1 and 5.");
            input.value = '';
        } else {
            input.setCustomValidity('');
        }
    }
    
    // Retrieving the DOM element with the id 'grades-container'
    var gradesContainer = document.getElementById('grades-container');
    
    // Retrieving the DOM element with the id 'remove-grade-btn'
    var removeGradeButton = document.getElementById('remove-grade-btn');

    // Hiding the remove button initially
    removeGradeButton.style.display = 'none';

    // Adding a new grade field to the grade-container
    function addGradeField() {
        var input = document.createElement('input');
        var label = document.createElement('label');
       
        // Calculating the number of existing grade fields and increment by 1
        var numGrades = gradesContainer.children.length / 2 + 1;

        // Setting input element properties
        input.type = 'number';
        input.classList.add('grade-input', 'visible');
        input.placeholder = 'Enter a number between 1 and 5';
        input.min = 1;
        input.max = 5;
        input.step = 1;
        input.required = true;

        // Validating grade inputs
        input.addEventListener('input', function() {
            validateGradeInput(input);
        });

        // Setting label properties
        label.htmlFor = 'grade' + numGrades;
        label.textContent = 'Grade ' + numGrades + ':';

        // Appending the label and input elements to the grades container
        gradesContainer.appendChild(label);
        gradesContainer.appendChild(input);

        // Checking if there are 5 or more grade fields and setting the remove grade button 
        if (gradesContainer.children.length / 2 >= 5) {
            removeGradeButton.style.display = 'block';
        }
    }

    // Function to trigger adding a grade field when button is clicked
    document.getElementById('add-grade-btn').addEventListener('click', function() {
        addGradeField();
    });
    
    // Function to remove a grade field
    removeGradeButton.addEventListener('click', function() {
        // Checking if there are more than 2 children (a label and an input field) in the grades container
        if (gradesContainer.children.length > 2) {
            // Removing the last label and input field
            gradesContainer.removeChild(gradesContainer.lastElementChild);
            gradesContainer.removeChild(gradesContainer.lastElementChild);
        }

        // Checking if the number of grade fields becomes 5 or fewer, hide the remove grade button
        if (gradesContainer.children.length / 2 <= 5) {
            removeGradeButton.style.display = 'none';
        }
    });

    // Function that calculates and visually represents GPA
    document.getElementById('grade-form').addEventListener('submit', function(e) {
        // Preventing the default form submission behavior
        e.preventDefault();

        // Retrieving all grade input fields
        var grades = document.querySelectorAll('.grade-input');
        var total = 0;
        var validGradesCount = 0;

        
        grades.forEach(function(gradeInput) {
            // Convert the value to a floating-point number
            var grade = parseFloat(gradeInput.value);

            // Checking if the grade is valid (between 1 and 5)
            if (!isNaN(grade) && grade >= 1 && grade <= 5) {
                // Adding the grade to the total and increment the valid grades count
                total += grade;
                validGradesCount++;
            }
        });

        //Error handling if no valid grades are entered, display an alert and return
        if (validGradesCount === 0) {
            alert("Please enter at least one valid grade.");
            return;
        }

        // Calculating the average of valid grades
        var average = total / validGradesCount;

        // Updating the average display
        document.getElementById('average').textContent = average.toFixed(2);

        // Adjusting the progress bar width based on the average
        var progressBar = document.getElementById('progress');
        progressBar.style.width = (average / 5) * 100 + '%';

        // Showing the result section
        var progressLabel = document.querySelectorAll('.progress-label');
        var resultSection = document.getElementByI d('result');
        resultSection.style.display = 'block';

        // Adding a visible class to the result section after a short delay
        setTimeout(function() {
            resultSection.classList.add('visible');
        }, 30);
    });

    document.getElementById('grade-form').addEventListener('reset', function() {
        // Resetting the progress bar width to 0%
        var progressBar = document.getElementById('progress');
        progressBar.style.width = '0%';
        
        // Hiding the result section
        var resultSection = document.getElementById('result');
        resultSection.style.display = 'none';
    });

    // Shortcut function that  checks if the key combination is Ctrl + C and it triggers the function to add a grade field
    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.key === 'c') {
            addGradeField();
        }
    });
});
