/*
HOMEWORK Part 3
Write a javascript function for an ATM:
The ATM should give cash
Should return "Not enough money" if you request more money
Should return the amount withdrawn and money left on the account if you have enough
Note: Hardcode your account money in the program
Bonus: Make it work with prompt()!
*/

function atmTransaction(accountBalance) {
    let withdrawnMoney = confirm("Do you want to withdraw money?");
    if (withdrawnMoney) {
        let requestAmount = prompt(
            "Please enter the amount you wish to withdraw"
        );
        let requestAmountParsedInt = parseInt(requestAmount);

        if (typeof requestAmountParsedInt === "number") {
            if (
                requestAmountParsedInt > 0 &&
                requestAmountParsedInt <= accountBalance
            ) {
                accountBalance -= requestAmountParsedInt;
                alert(
                    `You've withdrawn ${requestAmountParsedInt} MKD.\nYour balance is ${accountBalance} MKD.`
                );
                console.log(
                    `You've withdrawn ${requestAmountParsedInt} MKD.\nYour balance is ${accountBalance} MKD.`
                );
            } else if (requestAmountParsedInt > accountBalance) {
                alert(
                    `Not enough money. Your current balance is ${accountBalance} MKD`
                );
            } else {
                alert("Please enter a valid number");
            }
        } else {
            alert("You have entered invalid input");
        }
    } else {
        alert("Okay, maybe next time.");
    }
    return accountBalance;
}

let accountBalance = 30000;
accountBalance = atmTransaction(accountBalance);
accountBalance = atmTransaction(accountBalance);
accountBalance = atmTransaction(accountBalance);
accountBalance = atmTransaction(accountBalance);
accountBalance = atmTransaction(accountBalance);
