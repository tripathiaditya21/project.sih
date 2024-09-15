document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve form data
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        appointmentId: formData.get('appointmentId'),
        amount: formData.get('amount'),
        date: formData.get('date'),
        paymentMethod: formData.get('paymentMethod')
    };

    // Example of adding conditional data
    if (data.paymentMethod === 'creditcard' || data.paymentMethod === 'debitcard') {
        data.cardNumber = formData.get('cardNumber');
        data.expiryDate = formData.get('expiryDate');
        data.cvv = formData.get('cvv');
    }

    // Simple validation example
    if (!validateForm(data)) {
        alert('Please correct the errors in the form.');
        return;
    }

    // Send data to backend API
    fetch('https://your-backend-api.com/process-payment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        alert('Payment successful!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Payment failed. Please try again.');
    });
});

document.getElementById('paymentMethod').addEventListener('change', function() {
    const method = this.value;
    const cardDetails = document.getElementById('cardDetails');
    if (method === 'creditcard' || method === 'debitcard') {
        cardDetails.classList.remove('hidden');
    } else {
        cardDetails.classList.add('hidden');
    }
});

function validateForm(data) {
    // Example validation (customize as needed)
    return data.name && data.phone && data.appointmentId && data.amount && data.date &&
           (data.paymentMethod !== 'creditcard' && data.paymentMethod !== 'debitcard' ||
            (data.cardNumber && data.expiryDate && data.cvv));
}
