// Hamburger Menu
// Select the hamburger menu button
const hamburger = document.querySelector('.hamburger-menu');

// Select the navigation menu
const navMenu = document.querySelector('.nav-menu');

// Add an event listener to the hamburger button to listen for clicks
hamburger.addEventListener('click', () => {
    // Toggle the 'show' class on the nav menu to make it slide in and out
    navMenu.classList.toggle('show');
});

// Form
// Add an event listener to the form so we can process it when the user submits
document.getElementById("akan-form").addEventListener("submit", function (e) {
    // Prevent the page from reloading when the form is submitted
    e.preventDefault();

    // Get the user's birthday from the input field
    const birthday = document.getElementById("birthday").value;

    // Get the selected gender from the dropdown
    const gender = document.getElementById("gender").value;

    // Get the output div where we will show the result
    const output = document.getElementById("output");

    // Check if the user forgot to enter their birthday or gender
    if (!birthday || !gender) {
        // Let the user know they need to fill in both fields
        output.innerHTML = "<p>Please enter a valid date and select your gender.</p>";
        return; // Stop the rest of the code from running
    }

    // Convert the birthday string into a Date object
    const date = new Date(birthday);

    // Calculate the day of the week they were born on
    const dayOfWeek = calculateDayOfWeek(date);

    // Get their Akan name based on the day of the week and gender
    const akanName = getAkanName(dayOfWeek, gender);

    // Check if we successfully got an Akan name
    if (akanName) {
        // Show the user their Akan name in the output div
        output.innerHTML = `<p>Your Akan name is <strong>${akanName}</strong>.</p>`;
    } else {
        // Show an error message if something went wrong
        output.innerHTML = "<p>Something went wrong. Please try again.</p>";
    }
});

function calculateDayOfWeek(date) {
    // Get the first two digits of the year (century)
    const CC = Math.floor(date.getFullYear() / 100); 
    
    // Get the last two digits of the year
    const YY = date.getFullYear() % 100; 
    
    // Months in JavaScript are 0-based, so we need to add 1
    let MM = date.getMonth() + 1; 
    
    // Get the day of the month
    const DD = date.getDate(); 

    // Zeller's formula treats January and February as months 13 and 14 of the previous year
    if (MM < 3) {
        MM += 12; // Adjust the month to fit the formula
        YY -= 1; // Go back one year for January and February
    }

    // This is the main calculation based on Zeller's Congruence
    const d = Math.floor(
        (DD +                               // Add the day of the month
        Math.floor((13 * (MM + 1)) / 5) +  // Adjustment for the month
        YY +                               // Add the year within the century
        Math.floor(YY / 4) +               // Add leap year corrections
        Math.floor(CC / 4) -               // Add century corrections
        2 * CC) %                          // Subtract some extra corrections based on the century
        7
    );

    // We want the result to always be a positive number between 0 and 6
    return (d + 7) % 7; 
}

// Function to get the Akan name based on the day of the week and gender
function getAkanName(dayOfWeek, gender) {
    // List of male Akan names for each day of the week (Sunday to Saturday)
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

    // List of female Akan names for each day of the week (Sunday to Saturday)
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    // Check if the gender is male, then return the corresponding male name
    if (gender === "male") return maleNames[dayOfWeek];

    // Check if the gender is female, then return the corresponding female name
    if (gender === "female") return femaleNames[dayOfWeek];

    // If something goes wrong (like an invalid gender), return null
    return null;
}