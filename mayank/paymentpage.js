// scripts.js

function showPaymentOption(option) {
    // Hide all payment options
    document.getElementById('card-payment').style.display = 'none';
    document.getElementById('upi-payment').style.display = 'none';
    document.getElementById('netbanking-payment').style.display = 'none';
    document.getElementById('upi-qr-code').style.display = 'none';

    // Show selected payment option
    if (option === 'card') {
        document.getElementById('card-payment').style.display = 'block';
    } else if (option === 'upi') {
        document.getElementById('upi-payment').style.display = 'block';
        document.getElementById('upi-qr-code').style.display = 'block';
    } else if (option === 'netbanking') {
        document.getElementById('netbanking-payment').style.display = 'block';
    }

    // Enable the Pay Now button if all required fields are filled
    checkFormCompletion();
}

function checkFormCompletion() {
    const patientName = document.getElementById('patient-name').value;
    const appointmentId = document.getElementById('appointment-id').value;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    const termsAccepted = document.getElementById('terms').checked;

    let paymentInfoComplete = true;

    if (paymentMethod === 'card') {
        paymentInfoComplete = document.getElementById('card-name').value &&
                              document.getElementById('card-number').value &&
                              document.getElementById('expiry-date').value &&
                              document.getElementById('cvv').value;
    } else if (paymentMethod === 'upi') {
        paymentInfoComplete = document.getElementById('upi-id').value;
    } else if (paymentMethod === 'netbanking') {
        paymentInfoComplete = document.getElementById('bank-name').value;
    }

    const submitBtn = document.getElementById('submitBtn');
    if (patientName && appointmentId && paymentInfoComplete && termsAccepted) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

function validateCard() {
    checkFormCompletion();
}

function validateExpiry() {
    checkFormCompletion();
}

function validateCVV() {
    checkFormCompletion();
}

function validateUPI() {
    checkFormCompletion();
}

// Initialize payment method selection
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('input[name="paymentMethod"]:checked').dispatchEvent(new Event('click'));
});
