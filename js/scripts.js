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

// User Interface Logic
var account = new BankAccount



$(document).ready(function() {
  $("form#account").submit(function(event) {
    event.preventDefault();
    var firstName = $("input#first-name").val();
    var lastName = $("input#last-name").val();
    var initialDeposit = parseFloat($("input#initial-deposit").val()).toFixed(2);
    var withdraw =  parseFloat($("input#withdraw").val()).toFixed(2);
    var deposit = parseFloat($("input#deposit").val()).toFixed(2);
    var newUser = new BankUser(firstName, lastName, initialDeposit, withdraw, deposit)
    var fullName = newUser.fullName();
    if (withdraw === NaN) {
      withdraw === 0
    }
    var withdrawFunds= initialDeposit-withdraw
    var currentBalance = parseFloat(withdrawFunds).toFixed(2)+deposit


    console.log(initialDeposit)
    console.log(withdraw)
    console.log(deposit)
    console.log(currentBalance)

  });
});
