# 📊 GPA Calculator

A lightweight, interactive web application for calculating grade point averages with smooth animations and real-time validation.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## About

This GPA Calculator is a client-side web application designed to help students quickly compute their grade point averages across different educational systems. The application provides two calculation modes: one for college/university grading scales (6-10) and another for elementary and high school systems (1-5).

Built with vanilla JavaScript and modern CSS, the calculator features an intuitive interface with neumorphic design elements, smooth animations, and dynamic form controls. Users can add or remove grade fields on-the-fly, visualize their performance through an animated progress bar, and receive instant validation feedback.

Whether you're tracking semester grades, calculating cumulative GPAs, or simply need a quick average for planning purposes, this tool provides a fast, accessible solution without requiring backend infrastructure or data storage.

## Features

### Dynamic Grade Management
- Add unlimited grade input fields dynamically using the Add Grade button
- Remove excess fields when calculations are complete
- Keyboard shortcut support (`Ctrl+C`) for quick field addition
- Automatic show/hide of remove button based on field count

### Real-Time Validation
- Input validation ensures grades fall within the correct range
- Immediate feedback on invalid entries
- Prevents form submission with incomplete or incorrect data
- Clear placeholder text guides users on acceptable values

### Visual Feedback
- Animated progress bar displays average grade percentage
- Smooth CSS transitions enhance user experience
- Neumorphic design provides modern, tactile interface
- Color-coded visual indicators for grade performance

### User Controls
- Calculate button computes average from all valid grades
- Reset button clears all inputs and resets the display
- Responsive layout adapts to different screen sizes
- Clean, minimal interface reduces cognitive load

## Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6)
- **Styling:** Custom CSS with neumorphic design patterns
- **Architecture:** Vanilla JavaScript (no frameworks or dependencies)
- **Deployment:** Static files (can be hosted on any web server)

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server or dependencies required

### Installation

1. Clone the repository to your local machine:
```bash
git clone https://github.com/yourusername/GPA.git
```

2. Navigate to the project directory:
```bash
cd GPA
```

3. Choose the appropriate calculator version and open the HTML file:

**For College/University Grades (6-10 scale):**
```bash
cd College
start Index.html
```

**For Elementary/High School Grades (1-5 scale):**
```bash
cd "Elementary or high school"
start Index.html
```

Alternatively, simply double-click the `Index.html` file in your preferred folder to open it in your default browser.

## Usage

### Basic Workflow

1. **Enter Grades:** Input your grades in the pre-populated fields (5 fields available by default)
2. **Add More Fields:** Click "Add Grade" or press `Ctrl+C` to create additional input fields as needed
3. **Calculate:** Click the "Calculate Average" button to compute your GPA
4. **View Results:** Your average appears below the form with a visual progress bar representation
5. **Reset:** Click "Reset" to clear all inputs and start over

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+C` | Add a new grade input field |

### Grade Ranges

| Version | Grade Range | Description |
|---------|-------------|-------------|
| College | 6 - 10 | University/college grading system |
| Elementary/High School | 1 - 5 | Primary and secondary education |

**Note:** The calculator only accepts whole numbers within the specified range for each version. Decimal grades are not supported in the current implementation.

## Project Structure

```
GPA/
├── README.md
├── College/
│   ├── Index.html          # College calculator interface
│   ├── script.js           # Logic for 6-10 grading scale
│   └── style.css           # Shared styling
└── Elementary or high school/
    ├── Index.html          # Elementary/HS calculator interface
    ├── script.js           # Logic for 1-5 grading scale
    └── style.css           # Shared styling
```

## Browser Compatibility

This application is compatible with all modern browsers that support:
- ES6 JavaScript features
- CSS3 transitions and transforms
- DOM manipulation APIs

Tested and verified on:
- Google Chrome 90+
- Mozilla Firefox 88+
- Microsoft Edge 90+
- Safari 14+

## Contributing

Contributions are welcome. If you'd like to improve the calculator or add new features, feel free to fork the repository and submit a pull request.

## License

This project is available for educational and personal use.

## Acknowledgments

- Developed as a practical tool for students managing their academic performance
- Neumorphic design inspired by modern UI trends
- Built with accessibility and usability in mind
