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

$(document).ready(function(){
  $("form#account").submit(function(event) {
    event.preventDefault();
    var firstName = $("input#first-name").val();
    var lastName = $("input#last-name").val();
    var initialDeposit = $("input#initial-deposit").val();
    console.log(firstName, lastName, initialDeposit)


  })
  $("form#transactions").submit(function(event) {
    event.preventDefault();
    var withdraw = $("input#withdraw").val();
    var deposit = $("input#deposit").val();
    console.log(withdraw, deposit)

  })
})
