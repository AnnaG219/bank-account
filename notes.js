function BankAccount(){
 this.bankUsers = []
}

BankAccount.prototype.addUser = function(bankUser) {
  this.bankUsers.push(bankUser);
}



function BankUser (firstName, lastName, initialDeposit, withdraw, deposit){
  this.firstName = firstName,
  this.lastName = lastName,
  this.initialDeposit = initialDeposit,
  this.withdraw = withdraw,
  this.deposit = deposit
}

BankUser.prototype.fullName = function() {
  return this.firstName+" "+this.lastName;
}
BankUser.prototype.withdrawFunds = function() {
  return this.initialDeposit-this.withdraw;
}
BankUser.prototype.depositFunds = function() {
  return this.initialDeposit + this.deposit;
}
