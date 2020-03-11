var rudyTimer =(function(){	
	return {
		delayMsg2:function(){
			alert('Rudy!');
		}
	}	
})();


var accountInfoList=[];

//Account
var moduleFactoryAccount=(function(){
	var name;
	var balance;	
	
	return {
		createAccount:function(name, balance){
			this.name=name;
			this.balance=balance;
			return this;
		}
	}
})()

function addAccount(){
  var accountName =	document.getElementById("accountName");
  var deposit =	document.getElementById("deposit");
 
  
  var account = moduleFactoryAccount.createAccount(accountName.value, deposit.value);
  accountInfoList.push(account);
  
  bindingToTextArea();
}
function bindingToTextArea(){
	 var listAccount = document.getElementById("listAccount");
     var string="";
	 
	 for(let i=0; i< accountInfoList.length; i++){
		 string += "Account Name:    " + accountInfoList[i].name + "   Saving Account:   "+accountInfoList[i].balance +"\n"; 
	 }
	 listAccount.value=string;
}


var onload = function(){
 var btnAddNewAccount =	document.getElementById("newAccount");
	btnAddNewAccount.onclick = addAccount;
}

window.onload = onload;