console.log("starting password manager");

var storage = require('node-persist');
storage.initSync();

storage.setItemSync('name', 'Sudhir');
//console.log(storage.getItemSync('name'));
storage.setItemSync('accounts',[{username:'Devon',balance:0}]);
//console.log(storage.getItemSync('accounts'));
var accounts = storage.getItemSync('accounts');
var account1 = {
username:'Radha',
balance:12
};
accounts.push(account1);
storage.setItemSync('accounts',accounts)
console.log(storage.getItemSync('accounts'));