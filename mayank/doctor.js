document.getElementById('doctor-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for demonstration

    // Gather form data
    const formData = new FormData(this);

    // Convert form data to a readable format (for demonstration purposes)
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Output data to the console (or send it to a server)
    console.log('Form submitted with data:', data);

}
