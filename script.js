document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const event = document.getElementById("event").value;

    if (name && email && phone && event) {
        document.getElementById("confirmationMessage").textContent = 
            Thank you, ${name}! You have successfully registered for the ${event}.;
    } else {
        document.getElementById("confirmationMessage").textContent = 
            "Please fill out all fields!";
    }
});