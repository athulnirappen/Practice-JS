//Question: Create a BankAccount class with a private property balance. Add methods deposit and getBalance to modify and access the balance.

//examples of encapsulation
 
class BankAccount {
  #balance;

  constructor(initialvalue) {
    this.#balance = initialvalue;
  }

  deposit(amount) {
    this.#balance += amount;
  }
  getBalance() {
    return this.#balance;
  }
}

const data = new BankAccount(2000);
data.deposit(500);

console.log(data.getBalance());
