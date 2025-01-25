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
