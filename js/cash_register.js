var cashRegisterModule = (function(){
  var balance = 0;
  var value = 0;

  return {
    clear : function(){
      return null;
    },
    getBalance : function(){
      return balance;
    },
    depositCash : function(amount){
      balance += amount;
      return null;
    },
    withdrawCash : function(amount){
      balance -= amount;
      return null;
    }
  }

})();