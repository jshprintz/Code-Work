console.log('JS works!');


// Creates a class called BankAccount
class BankAccount {
    constructor(ownerName, balance, acctNum){
        this.ownerName = ownerName;
        this.balance = balance;
        this.acctNum = acctNum;
    }
    // All money is added to balance
    deposit(money){
        this.balance += money;
    }
    // All money is subtracted from balance
    withdraw(money){
        this.balance -= money;
    }
}

// Derived from bank account
class CheckingAccount extends BankAccount {
    constructor(ownerName, balance, acctNum, overdraftEnabled){
            super(ownerName, balance, acctNum)
            //New method
            this.overdraftEnabled = overdraftEnabled;
        };
    
    //Override withdraw if overdraftEnabled is true
    withdraw(amount){
        if (this.balance < amount){
            this.overdraftEnabled === true ? this.balance -= amount : console.log("Not enough money. Overdraft not enabled");
        } else {
            this.balance -= amount;
        };
    };
};

//Derived from Bank Account
class SavingsAccount extends BankAccount {
    constructor(ownerName, balance, acctNum){
        super(ownerName, balance, acctNum)
    }
    // All money is added to balance
    deposit(money){
        this.balance += money;
    }

    //Override withdraw if balance is less than amount
    withdraw(amount){
        this.balance < amount ? console.log(`You don't have enough money`) : this.balance -= amount;
    }
}

// Person1 creates new bank account.
let person1 = new BankAccount('Mark Cuban', 15000000, '1234567');
    console.log(person1, 'before transaction');
// Person1 withdraws 500,000 from bank account
person1.withdraw(500000);
    console.log(person1, 'after transaction');

// Person2 creates new Checking account
let person2 = new CheckingAccount('Joe Blow', 25, '1234568', true);
    console.log(person2, 'before transaction');
// Person2 overdrafts from checking, but overdraftEnabled is true
person2.withdraw(50);
    console.log(person2, 'after transaction');

// Person3 creates new Checking account
let person3 = new CheckingAccount('Jill Shmoe', 25, '1234569', false);
    console.log(person3, 'before transaction');
// Person3 overdrafts from checking, overdraftEnabled is set to false
person3.withdraw(50);
    console.log(person3, 'after transaction');

// Person4 creates new Savings account
let person4 = new SavingsAccount('Monopoly Man', 100, '1234570');
    console.log(person4, 'before transaction');
// Person4 overdrafts from savings, is unable to witdraw
person4.withdraw(500)
    console.log(person4, 'after transaction');

