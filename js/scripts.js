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

$(document).ready(function(){
  $("form#account").submit(function(event) {
    event.preventDefault();
    var inputtedfirstName = $("input#first-name").val();
    var inputtedlastName = $("input#last-name").val();
    var inputtedinitialDeposit = $("input#initial-deposit").val();
    var withdraw = $("input#withdraw").val();
    var deposit = $("input#deposit").val();
    var newUser = new BankUser(inputtedfirstName, inputtedlastName, inputtedinitialDeposit, withdraw, deposit)

    console.log(newUser)

  });
});
