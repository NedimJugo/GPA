document.addEventListener('DOMContentLoaded', function() {
    
    function validateGradeInput(input) {
        var value = input.value.trim();
        if (!value.match(/^\d+$/) || value < 6 || value > 10) {
            input.setCustomValidity("Please enter a whole number between 1 and 5.");
            input.value = '';
        } else {
            input.setCustomValidity('');
        }
    }

    var gradesContainer = document.getElementById('grades-container');
    var removeGradeButton = document.getElementById('remove-grade-btn');
    removeGradeButton.style.display = 'none'; 

    function addGradeField() {
        var input = document.createElement('input');
        var label = document.createElement('label');
        var numGrades = gradesContainer.children.length / 2 + 1;
        input.type = 'number';
        input.classList.add('grade-input', 'visible');
        input.placeholder = 'Enter a number between 6 and 10';
        input.min = 6;
        input.max = 10;
        input.step = 1;
        input.required = true;
        input.addEventListener('input', function() {
            validateGradeInput(input);
        });
        label.htmlFor = 'grade' + numGrades;
        label.textContent = 'Grade ' + numGrades + ':';

        gradesContainer.appendChild(label);
        gradesContainer.appendChild(input);

        if (gradesContainer.children.length / 2 >= 5) {
            removeGradeButton.style.display = 'block';
        }
    }

    document.getElementById('add-grade-btn').addEventListener('click', function() {
        addGradeField();
    });

    removeGradeButton.addEventListener('click', function() {
        if (gradesContainer.children.length > 2) {
            gradesContainer.removeChild(gradesContainer.lastElementChild);
            gradesContainer.removeChild(gradesContainer.lastElementChild);
        }

        if (gradesContainer.children.length / 2 <= 5) {
            removeGradeButton.style.display = 'none';
        }
    });

    document.getElementById('grade-form').addEventListener('submit', function(e) {
        e.preventDefault();

        var grades = document.querySelectorAll('.grade-input');
        var total = 0;
        var validGradesCount = 0;
        grades.forEach(function(gradeInput) {
            var grade = parseFloat(gradeInput.value);
            if (!isNaN(grade) && grade >= 6 && grade <= 10) {
                total += grade;
                validGradesCount++;
            }
        });
        if (validGradesCount === 0) {
            alert("Please enter at least one valid grade.");
            return;
        }

        var average = total / validGradesCount;
        document.getElementById('average').textContent = average.toFixed(2);

        var progressBar = document.getElementById('progress');
        progressBar.style.width = (average - 6)/4 * 100 + '%';

        var progressLabel = document.querySelectorAll('.progress-label');
        var resultSection = document.getElementById('result');
        resultSection.style.display = 'block'; 

        setTimeout(function() {
            resultSection.classList.add('visible');}
        , 30);
    });

    document.getElementById('grade-form').addEventListener('reset', function() {
        var progressBar = document.getElementById('progress');
        progressBar.style.width = '0%';
        
        var resultSection = document.getElementById('result');
        resultSection.style.display = 'none';
    });


    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.key === 'c') {
            addGradeField();
        }
    });

});
