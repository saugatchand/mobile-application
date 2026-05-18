$(document).ready(function () {

    let balance = 5000;
    let pin = 1234;
    let showBalance = false;

    // Function to update balance
    function updateBalance() {

        if (showBalance) {
            $("#balance").text(balance);
        }
        else {
            $("#balance").text("****");
        }

    }

    // Eye button
    $("#eye").click(function () {

        showBalance = !showBalance;

        if (showBalance) {
            $("#eye").text("🙈");
        }
        else {
            $("#eye").text("👁️");
        }

        updateBalance();

    });

    // Deposit
    $("#depositBtn").click(function () {

        let userPin = Number(prompt("Enter PIN"));

        if (userPin === pin) {

            let amount = Number(prompt("Enter Deposit Amount"));

            // Validation
            if (isNaN(amount) || amount <= 0) {
                alert("Enter valid amount");
                return;
            }

            balance += amount;

            alert("Money Deposited Successfully");

            updateBalance();

        }
        else {
            alert("Wrong PIN");
        }

    });

    // Withdraw
    $("#withdrawBtn").click(function () {

        let userPin = Number(prompt("Enter PIN"));

        if (userPin === pin) {

            let amount = Number(prompt("Enter Withdraw Amount"));

            // Validation
            if (isNaN(amount) || amount <= 0) {
                alert("Enter valid amount");
                return;
            }

            // Check balance
            if (amount > balance) {
                alert("Insufficient Balance");
            }
            else {

                balance -= amount;

                alert("Money Withdrawn Successfully");

                updateBalance();

            }

        }
        else {
            alert("Wrong PIN");
        }

    });

});