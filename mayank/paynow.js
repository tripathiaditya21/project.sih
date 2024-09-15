// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Function to handle date change and update daily summary (example)
    document.getElementById('date-selector').addEventListener('change', (event) => {
        const selectedDate = event.target.value;
        // Example logic to update the summary based on selected date
        console.log('Selected Date:', selectedDate);
        // You can fetch data or update summary elements here
    });

    // Example code to populate patient list (static data for demo)
    const patientList = [
        { name: 'Alice Johnson', history: 'Hypertension' },
        { name: 'Bob Williams', history: 'Follow-up' },
        { name: 'Catherine Lee', history: 'Initial Consultation' },
    ];

    const patientListContainer = document.getElementById('patient-list');
    patientList.forEach(patient => {
        const patientItem = document.createElement('div');
        patientItem.className = 'patient-item';
        patientItem.innerHTML = `<strong>${patient.name}</strong> - ${patient.history}`;
        patientListContainer.appendChild(patientItem);
    });
});
