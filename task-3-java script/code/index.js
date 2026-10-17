/*const library=["books1","books-2","books-3","books-4"]
console.log(library);
library.push("fornt-end-books");
console.log(library);
library.pop()
console.log(library);
for(i=0;i<library.length;i++){
    console.log(library[i]);
}
console.log(library[library.length-1]) ;
console.log(`library contain ${i} books`);
//----------------------------------------------------------------------------------------------------------///
/*Create a function declaration named calculateBonus(baseSalary, percentage) that returns the bonus amount.
Create a function expression stored in calculateNetSalary that accepts an employee object and returns:
Base Salary + Bonus − Deduction
Create an arrow function named getSalaryStatus(netSalary) that returns:
"High" if the salary is at least 15,000.
"Medium" if it is at least 8,000 and below 15,000.
"Low" if it is below 8,000.
Add a regular method named getReport() to the employee object. It must use the functions above and return the report.
Assume all inputs are valid numbers.*/
/*const employee = {
  name: "Mona",
  baseSalary: 10000,
  percentage: 10,
  deduction: 500,
  bonus: 0,

  getReport() {
    calculateBonus(this.baseSalary, this.percentage);
    calculateNetSalary(this);
    getSalaryStatus(this.netSalary);
  }
};

function calculateBonus(baseSalary, percentage) {
  employee.bonus = baseSalary * percentage / 100;
  return console.log(`the bonus is ${employee.bonus}`);
}

function calculateNetSalary(employee) {
  employee.netSalary = employee.baseSalary + employee.bonus - employee.deduction;
  return console.log(`the net salary ${employee.netSalary}`);
}

let getSalaryStatus = (netSalary) => {
  if (netSalary >= 15000) {
    return console.log("high");
  }
  else if (netSalary >= 8000) {
    return console.log("medium");
  }
  else {
    return console.log("low");
  }
};

employee.getReport();*/
//----------------------------------------------------------------------------------------------------------//


const customer = {
    name: "hazem",
    balance: 20000,
    transaction: []
};

let deposit = +prompt("Please enter your deposit");

function deposit_transaction() {
    if (deposit > 0) {
        let balanceBefore = customer.balance;
        customer.balance += deposit;

        customer.transaction.push({
            type: "deposit",
            amount: deposit,
            balanceBefore: balanceBefore,
            balanceAfter: customer.balance
        });

        return console.log(
            `Successful transaction. Your current balance is ${customer.balance}`
        );
    }
    else {
        return console.log("Invalid amount");
    }
}

deposit_transaction();

let with_draw = +prompt("Enter withdrawal amount");

function with_draw_transaction() {
    if (with_draw > 0) {
        if (with_draw > customer.balance) {
            return console.log("in-valid-balance");
        }

        let balanceBefore = customer.balance;
        customer.balance -= with_draw;

        customer.transaction.push({
            type: "withdraw",
            amount: with_draw,
            balanceBefore: balanceBefore,
            balanceAfter: customer.balance
        });

        return console.log(
            `Successful transaction. Your current balance is ${customer.balance}`
        );
    }
    else {
        return console.log("Invalid amount");
    }
}

with_draw_transaction();


function get_the_last_transaction() {
    const transactions = customer.transaction;

    if (transactions.length === 0) {
        return console.log("No transactions");
    }

    return console.log(transactions[transactions.length - 1]);
}

get_the_last_transaction();

function undo_last_transaction() {
    const transactions = customer.transaction;

    if (transactions.length === 0) {
        return console.log("No transactions to undo");
    }

    const lastTransaction = transactions.pop();

    customer.balance = lastTransaction.balanceBefore;

    return console.log(
        `Last transaction undone. Your current balance is ${customer.balance}`
    );
}

undo_last_transaction();


function get_summary() {
    return console.log(
        `Account Owner: ${customer.name}
Current Balance: ${customer.balance}
Total Transactions: ${customer.transaction.length}`
    );
}

get_summary();
