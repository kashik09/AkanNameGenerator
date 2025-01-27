# Akan Name Generator

Discover your Akan name! This web application calculates the day of the week you were born based on your date of birth and assigns you an Akan name according to Ghanaian naming traditions.

## Live Preview

You can view the live version of this project here:  
[Live Preview](https://kashik09.github.io/AkanNameGenerator/)

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup Instructions](#setup-instructions)
5. [Usage](#usage)
6. [Behavior Driven Development (BDD)](#behavior-driven-development-bdd)
7. [License](#license)

## Overview

The Akan Name Generator is a simple, user-friendly web application that:

- Calculates the day of the week you were born based on the date you provide.
- Assigns you a traditional Akan name from Ghana based on your gender and birth day.

This app is designed to celebrate Ghanaian culture while providing users a fun way to explore their potential Akan name.

## Features

- **Date Input**: Use a calendar to select your birthdate in a clear `dd/mm/yyyy` format.
- **Gender Selection**: Choose your gender from a dropdown menu for personalized naming.
- **Responsive Design**: Fully responsive for mobile, tablet, and desktop users.
- **Cultural Insight**: Learn about Akan naming traditions through the app.

## Technologies Used

- **HTML5**: Markup structure.
- **CSS3**: Custom styles, responsive design.
- **JavaScript (ES6)**: Logic for calculating the day of the week and assigning names.
- **Adinkra Icon**: A culturally inspired favicon.

## Setup Instructions

### Clone the Repository

```bash
git clone https://github.com/kashik09/akan-name-generator.git
```

### Navigate to the Project Directory

```bash
cd akan-name-generator
```

## Usage

1. Open the app in your browser.
2. Enter your date of birth using the calendar picker.
3. Select your gender from the dropdown menu.
4. Click the **"Find My Akan Name"** button.
5. Your Akan name will be displayed below the form.

## Behavior Driven Development (BDD)

| **Feature**            | **Input**               | **Expected Output**                              |
| ---------------------- | ----------------------- | ------------------------------------------------ |
| Select date and gender | Birthdate: 01/01/2000  | Akan name based on day of the week (e.g., Kwame) |
| No date entered        | Empty birthdate        | Error: "Please enter a valid date and gender."   |
| Invalid date format    | Date: 13/13/2000       | Error: "The date entered is invalid."            |

## File Structure

```
akan-name-generator/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Custom styles
├── js/
│   └── app.js          # Core JavaScript logic
├── assets/
│   └── favicon_io/     # Favicon files
└── README.md           # Project documentation
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.