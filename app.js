console.log("starting password manager");

var storage = require('node-persist');
storage.initSync();
var account1 = {
	name:'sudhir',
	userName:'gmail',
	password:'Lagan'
};



function createAccount (account) {
	var accounts = storage.getItemSync('accounts1');
	if(typeof accounts ==='undefined'){
		accounts = [];
	}  
	accounts.push(account);
	storage.setItemSync('accounts1',account);
	console.log(accounts);
	return accounts;
}

createAccount(account1);

function getAccount (accountName) {
	var accounts2 = storage.getItemSync('accounts1');
	var matchedAccount; 
	for(var i=0;i<accounts2.length-1;i++){
		if(accounts2[i].userName===accountName){
			matchedAccount = accounts[i];
		}
	}
	return matchedAccount;
}

console.log(getAccount('gmail'));