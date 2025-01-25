document.getElementById("akan-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const birthday = document.getElementById("birthday").value;
    const gender = document.getElementById("gender").value;
    const output = document.getElementById("output");

    if (!birthday || !gender) {
        output.innerHTML = "<p>Please enter a valid date and select your gender.</p>";
        return;
    }

    const date = new Date(birthday);
    const dayOfWeek = calculateDayOfWeek(date);

    const akanName = getAkanName(dayOfWeek, gender);
    if (akanName) {
        output.innerHTML = `<p>Your Akan name is <strong>${akanName}</strong>.</p>`;
    } else {
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
