var calculatorModule = (function(){
  var memory = 0;
  var total = 0;

  var _validate = function(method){
    return function(arg){
      if(typeof arg === 'number'){
        return method(arg);
      }
      else return 'please enter a number';
    };
  };
  function _add(number){
    total += number;
  }
  function _subtract(number){
    total -= number;
  }
  function _multiply(number){
    total *= number;
  }
  function _divide(number){
    total /= number;
  }
  function _load(number){
    total = number;
    return number;
  }


  var _calculator = {
    add: _validate(_add),
    subtract: _validate(_subtract),
    multiply: _validate(_multiply),
    divide: _validate(_divide),
    load: _validate(_load),
    getTotal: function(){
      return total;
    },
    recallMemory: function(){
      return memory;
    },
    storeTotal: function(arg){
      total = arg;
    },
    clearMemory: function(){
      memory = 0;
    },
    validation: function(){

    },
    saveMemory: function(){
      memory += display;
    },
    withdraw : function(){
      if(memory >= display){
        memory -= display;
      }

    }
  };
  return _calculator;
})();