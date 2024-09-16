// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Example payment history data (you can replace this with API calls or dynamic data)
    const paymentHistory = [
        {
            date: "2024-09-10",
            transactionId: "TXN123456",
            amount: 50.25,
            status: "Completed"
        },
        {
            date: "2024-08-22",
            transactionId: "TXN654321",
            amount: 35.50,
            status: "Pending"
        },
        {
            date: "2024-08-10",
            transactionId: "TXN111222",
            amount: 75.00,
            status: "Failed"
        }
    ];

    const paymentHistoryBody = document.getElementById('payment-history-body');

    // Function to format date in a readable way
    function formatDate(dateStr) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateStr).toLocaleDateString(undefined, options);
    }

    // Populate the table with payment data
    paymentHistory.forEach(payment => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${formatDate(payment.date)}</td>
            <td>${payment.transactionId}</td>
            <td>$${payment.amount.toFixed(2)}</td>
            <td>${payment.status}</td>
        `;
        paymentHistoryBody.appendChild(row);
    });
});
