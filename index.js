class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
  }
  get balance() {
    let x = this.transactions.reduce((acc, curr) => acc + curr.value, 0);
    return x;

  }
  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}
class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  commit() {
    //Keep track of the time of the transaction
    if(this.isAllowed === true) {
      this.time = new Date();
      //Add the transaction to the account
      this.account.addTransaction(this);
      }
  }
}

class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
    }
    get isAllowed() {
      if (this.value < 0) {
        return false;
      }
    }
  }

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
  get isAllowed() {
    if (this.value > 0) {
      return true;

    }
  }
}




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("snow-patrol");
t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log('Transaction 1:', t1);
console.log("\n\nCheck Balance!!!!\n", myAccount.balance);

t2 = new Withdrawal(9.99, myAccount);
t2.commit();
console.log('\n\nTransaction 2:', t2);
console.log("\n\nCheck Balance!!!!\n", myAccount.balance);

t3 = new Deposit(120.00, myAccount);
t3.commit();
console.log('\n\nTransaction 3:', t3);

console.log("\n\nCheck Balance!!!!", myAccount.balance);
