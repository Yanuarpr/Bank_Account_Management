# Bank_Account_Management
This project is a simple web-based bank account management system that allows users to perform basic banking operations such as depositing, withdrawing, and checking their balance. It demonstrates the use of classes, switch statements, and try-catch-finally statements in JavaScript.

Instructions
Account Creation: When you load the website, an account for "John Doe" with an account type of "Savings" is automatically created. The initial balance is set to $0.

Perform Transactions:

Choose a transaction type from the dropdown menu: Deposit, Withdraw, or Check Balance.
Enter the transaction amount in the input field.
Click the "Submit" button to perform the selected transaction.
If you choose "Deposit," the specified amount will be added to the account balance.
If you choose "Withdraw," the specified amount will be deducted from the account balance, provided sufficient funds are available. Otherwise, you'll receive an "Insufficient funds" error.
If you choose "Check Balance," the current account balance will be displayed in an alert box.
Exception Handling: The website uses try-catch-finally statements to handle exceptions gracefully. If an error occurs, such as insufficient funds or an invalid input, an alert message will inform the user of the issue. The try block attempts to perform the transaction, the catch block handles any errors, and the finally block clears the input field.

Code Walkthrough
Class Definition: The JavaScript code defines a BankAccount class with properties like account holder, account type, and balance. It also includes methods for depositing, withdrawing, and checking the balance.

Transaction Handling: The performTransaction function reads the selected transaction type and amount, then uses a switch statement to execute the appropriate method of the BankAccount class.

Exception Handling: Exception handling is implemented using try-catch-finally statements. If an exception is thrown (e.g., insufficient funds), the catch block displays an error message. The finally block ensures that the input field is cleared after each transaction.

Dynamic Updates: The updateAccountInfo function updates the account information displayed on the webpage after each transaction.
