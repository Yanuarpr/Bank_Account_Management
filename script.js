class BankAccount {
            constructor(accountHolder, accountType) {
                this.accountHolder = accountHolder;
                this.accountType = accountType;
                this.balance = 0;
            }

            deposit(amount) {
                this.balance += amount;
            }

            withdraw(amount) {
                if (amount <= this.balance) {
                    this.balance -= amount;
                } else {
                    throw new Error("Insufficient funds");
                }
            }

            checkBalance() {
                return this.balance;
            }
        }

        let account;

        function performTransaction() {
            const transactionType = document.getElementById("transactionType").value;
            const amount = parseFloat(document.getElementById("amount").value);

            try {
                switch (transactionType) {
                    case "deposit":
                        account.deposit(amount);
                        break;
                    case "withdraw":
                        account.withdraw(amount);
                        break;
                    case "checkBalance":
                        const balance = account.checkBalance();
                        alert(`Current Balance: $${balance}`);
                        break;
                    default:
                        throw new Error("Invalid transaction type");
                }

                updateAccountInfo();
            } catch (error) {
                alert(error.message);
            } finally {
                document.getElementById("amount").value = "";
            }
        }

        function updateAccountInfo() {
            document.getElementById("accountHolder").textContent = account.accountHolder;
            document.getElementById("accountType").textContent = account.accountType;
            document.getElementById("balance").textContent = account.balance.toFixed(2);
        }

        // Create an account when the page loads
        window.onload = function () {
            const accountHolder = "John Doe";
            const accountType = "Savings";
            account = new BankAccount(accountHolder, accountType);
            updateAccountInfo();
        };