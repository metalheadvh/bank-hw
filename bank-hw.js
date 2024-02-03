const accountCharacters = ["RO", 1, 2, 3, 4, 5, "A", "B", "C", "D", "E", "F"];
const sums = [-1000, -2000, 3000, 4000];
let amount = sums[Math.floor(Math.random() * sums.length)];

class bancaLuMatei {
  constructor(name, swift, country) {
    this.name = name;
    this.swift = swift;
    this.country = country;
    this.accounts = [];
  }

  adaugaCont(iban, sum) {
    let account = {
      iban: iban,
      sum: sum,
    };
    this.accounts.push(account);
    return account;
  }
  generateRandomAccount(length) {
    let password = "";
    while (password.length < length) {
      const index = Math.ceil(Math.random() * accountCharacters.length - 1);
      password = password + accountCharacters[index];
    }
    return password;
  }
  displayAllAccounts() {
    for (let i = 0; i < bank.accounts.length; i++) {
      console.log(bank.accounts[i]);
    }
  }
  displayAccount(parameter) {
    console.log(accountNumber[parameter]);
  }
}

let bank = new bancaLuMatei();

let account1 = bank.adaugaCont(`${bank.generateRandomAccount(20)}`, amount);
let account2 = bank.adaugaCont(`${bank.generateRandomAccount(20)}`, amount);
let account3 = bank.adaugaCont(`${bank.generateRandomAccount(20)}`, amount);

const accountNumber = [account1, account2, account3];

bank.displayAllAccounts();
bank.displayAccount(0);
bank.displayAccount(1);
bank.displayAccount(2);
