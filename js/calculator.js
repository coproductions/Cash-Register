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
  }
  return _calculator;
})();

var functionKey = null;
var contFunction = null;
var newFunction = false;

var displayArray = [];
var display = Number(displayArray.join(''));
document.getElementById('display').innerHTML = display;
document.getElementById("display").style.padding = "1px 3px 1px 5px";

document.getElementById("one").addEventListener('click',function(){
  if (!newFunction  && !contFunction){
    displayArray.push(1);
     display = Number(displayArray.join(''));
    document.getElementById('display').innerHTML = display;
  } else if (contFunction){
      switch (contFunction){
        case 'add' : //calculatorModule.add(display);
                    document.getElementById('display').innerHTML = display;
                    displayArray = [];
                    displayArray.push(1);
                    display = Number(displayArray.join(''));
        break;
      }
    }

  else {
    calculatorModule.storeTotal(display);
    displayArray = [];
    displayArray.push(1);
     display = Number(displayArray.join(''));
    document.getElementById('display').innerHTML = display;
    newFunction = false;
    contFunction = null;
  }
});
document.getElementById("two").addEventListener('click',function(){
  if (!newFunction  && !contFunction){
    displayArray.push(2);
     display = Number(displayArray.join(''));
    document.getElementById('display').innerHTML = display;
  } else if (contFunction){
      switch (contFunction){
        case 'add' : //calculatorModule.add(display);
                    document.getElementById('display').innerHTML = display;
                    displayArray = [];
                    displayArray.push(2);
                    display = Number(displayArray.join(''));
        break;
      }
    }

  else {
    calculatorModule.storeTotal(display);
    displayArray = [];
    displayArray.push(2);
     display = Number(displayArray.join(''));
    document.getElementById('display').innerHTML = display;
    newFunction = false;
    contFunction = null;
  }
});

document.getElementById("three").addEventListener('click',function(){
  if (!newFunction  && !contFunction){
    displayArray.push(3);
     display = Number(displayArray.join(''));
    document.getElementById('display').innerHTML = display;
  } else if (contFunction){
      switch (contFunction){
        case 'add' : //calculatorModule.add(display);
                    document.getElementById('display').innerHTML = display;
                    displayArray = [];
                    displayArray.push(3);
                    display = Number(displayArray.join(''));
        break;
      }
    }

  else {
    calculatorModule.storeTotal(display);
    displayArray = [];
    displayArray.push(3);
     display = Number(displayArray.join(''));
    document.getElementById('display').innerHTML = display;
    newFunction = false;
    contFunction = null;
  }
});

document.getElementById("four").addEventListener('click',function(){
  if (!newFunction  && !contFunction){
    displayArray.push(4);
     display = Number(displayArray.join(''));
    document.getElementById('display').innerHTML = display;
  } else if (contFunction){
      switch (contFunction){
        case 'add' : //calculatorModule.add(display);
                    document.getElementById('display').innerHTML = display;
                    displayArray = [];
                    displayArray.push(4);
                    display = Number(displayArray.join(''));
        break;
      }
    }

  else {
    calculatorModule.storeTotal(display);
    displayArray = [];
    displayArray.push(4);
     display = Number(displayArray.join(''));
    document.getElementById('display').innerHTML = display;
    newFunction = false;
    contFunction = null;
  }
});

document.getElementById("five").addEventListener('click',function(){
  if (!newFunction  && !contFunction){
    displayArray.push(5);
     display = Number(displayArray.join(''));
    document.getElementById('display').innerHTML = display;
  } else if (contFunction){
      switch (contFunction){
        case 'add' : //calculatorModule.add(display);
                    document.getElementById('display').innerHTML = display;
                    displayArray = [];
                    displayArray.push(5);
                    display = Number(displayArray.join(''));
        break;
      }
    }

  else {
    calculatorModule.storeTotal(display);
    displayArray = [];
    displayArray.push(5);
     display = Number(displayArray.join(''));
    document.getElementById('display').innerHTML = display;
    newFunction = false;
    contFunction = null;
  }
});

document.getElementById("six").addEventListener('click',function(){
  if (!newFunction  && !contFunction){
    displayArray.push(6);
     display = Number(displayArray.join(''));
    document.getElementById('display').innerHTML = display;
  } else if (contFunction){
      switch (contFunction){
        case 'add' : //calculatorModule.add(display);
                    document.getElementById('display').innerHTML = display;
                    displayArray = [];
                    displayArray.push(6);
                    display = Number(displayArray.join(''));
        break;
      }
    }

  else {
    calculatorModule.storeTotal(display);
    displayArray = [];
    displayArray.push(6);
     display = Number(displayArray.join(''));
    document.getElementById('display').innerHTML = display;
    newFunction = false;
    contFunction = null;
  }
});

document.getElementById("seven").addEventListener('click',function(){
  if (!newFunction  && !contFunction){
    displayArray.push(7);
     display = Number(displayArray.join(''));
    document.getElementById('display').innerHTML = display;
  } else if (contFunction){
      switch (contFunction){
        case 'add' : //calculatorModule.add(display);
                    document.getElementById('display').innerHTML = display;
                    displayArray = [];
                    displayArray.push(7);
                    display = Number(displayArray.join(''));
        break;
      }
    }

  else {
    calculatorModule.storeTotal(display);
    displayArray = [];
    displayArray.push(7);
     display = Number(displayArray.join(''));
    document.getElementById('display').innerHTML = display;
    newFunction = false;
    contFunction = null;
  }
});

document.getElementById("eight").addEventListener('click',function(){
  if (!newFunction  && !contFunction){
    displayArray.push(8);
     display = Number(displayArray.join(''));
    document.getElementById('display').innerHTML = display;
  } else if (contFunction){
      switch (contFunction){
        case 'add' : //calculatorModule.add(display);
                    document.getElementById('display').innerHTML = display;
                    displayArray = [];
                    displayArray.push(8);
                    display = Number(displayArray.join(''));
        break;
      }
    }

  else {
    calculatorModule.storeTotal(display);
    displayArray = [];
    displayArray.push(8);
     display = Number(displayArray.join(''));
    document.getElementById('display').innerHTML = display;
    newFunction = false;
    contFunction = null;
  }
});

document.getElementById("nine").addEventListener('click',function(){
  if (!newFunction  && !contFunction){
    displayArray.push(9);
     display = Number(displayArray.join(''));
    document.getElementById('display').innerHTML = display;
  } else if (contFunction){
      switch (contFunction){
        case 'add' : //calculatorModule.add(display);
                    document.getElementById('display').innerHTML = display;
                    displayArray = [];
                    displayArray.push(9);
                    display = Number(displayArray.join(''));
        break;
      }
    }

  else {
    calculatorModule.storeTotal(display);
    displayArray = [];
    displayArray.push(9);
     display = Number(displayArray.join(''));
    document.getElementById('display').innerHTML = display;
    newFunction = false;
    contFunction = null;
  }
});

document.getElementById("zero").addEventListener('click',function(){
  if (!newFunction  && !contFunction){
    displayArray.push(0);
     display = Number(displayArray.join(''));
    document.getElementById('display').innerHTML = display;
  } else if (contFunction){
      switch (contFunction){
        case 'add' : //calculatorModule.add(display);
                    document.getElementById('display').innerHTML = display;
                    displayArray = [];
                    displayArray.push(0);
                    display = Number(displayArray.join(''));
        break;
      }
    }

  else {
    calculatorModule.storeTotal(display);
    displayArray = [];
    displayArray.push(0);
     display = Number(displayArray.join(''));
    document.getElementById('display').innerHTML = display;
    newFunction = false;
    contFunction = null;
  }
});

document.getElementById("zeroZero").addEventListener('click',function(){
  if (!newFunction  && !contFunction){
    displayArray.push(00);
     display = Number(displayArray.join(''));
    document.getElementById('display').innerHTML = display;
  } else if (contFunction){
      switch (contFunction){
        case 'add' : //calculatorModule.add(display);
                    document.getElementById('display').innerHTML = display;
                    displayArray = [];
                    displayArray.push(00);
                    display = Number(displayArray.join(''));
        break;
      }
    }

  else {
    calculatorModule.storeTotal(display);
    displayArray = [];
    displayArray.push(00);
     display = Number(displayArray.join(''));
    document.getElementById('display').innerHTML = display;
    newFunction = false;
    contFunction = null;
  }
});

document.getElementById("dot").addEventListener('click',function(){
  if (!newFunction  && !contFunction){
    displayArray.push('.');
     display = Number(displayArray.join(''));
    document.getElementById('display').innerHTML = display;
  } else if (contFunction){
      switch (contFunction){
        case 'add' : //calculatorModule.add(display);
                    document.getElementById('display').innerHTML = display;
                    displayArray = [];
                    displayArray.push('.');
                    display = Number(displayArray.join(''));
        break;
      }
    }

  else {
    calculatorModule.storeTotal(display);
    displayArray = [];
    displayArray.push('.');
     display = Number(displayArray.join(''));
    document.getElementById('display').innerHTML = display;
    newFunction = false;
    contFunction = null;
  }
});

// document.getElementById("dot").addEventListener('click',function(){
//   if (!newFunction){
//     displayArray.push('.');
//      display = Number(displayArray.join(''));
//     document.getElementById('display').innerHTML = display;
//   } else {
//     calculatorModule.storeTotal(display);
//     displayArray = [];
//     displayArray.push('.');
//      display = Number(displayArray.join(''));
//     document.getElementById('display').innerHTML = display;
//     newFunction = false;
//   }
// });



document.getElementById("add").addEventListener('click',function(){
  if(!functionKey && !contFunction){
    calculatorModule.load(display);
    //displayArray = [];
     //display = Number(displayArray.join(''));
    document.getElementById('display').innerHTML = display;
    newFunction = true;
    functionKey = 'add';
  } else {
    switch (functionKey){
      case 'add' : calculatorModule.add(display);
                    contFunction = 'add';
        break;
      case 'subtract' : calculatorModule.subtract(display);
      contFunction = 'subtract';
        break;
      case 'multiply' : calculatorModule.multiply(display);
      contFunction = 'multiply';
        break;
      case 'divide' : calculatorModule.divide(display);
      contFunction = 'divide';
        break;
    }
  }
});
document.getElementById("equals").addEventListener('click',function(){
  if(!functionKey){
    calculatorModule.load(display);
    //displayArray = [];
    display = calculatorModule.getTotal();
    document.getElementById('display').innerHTML = display;

  } else {
    switch (functionKey){
      case 'add' :
        calculatorModule.add(display);
        display = calculatorModule.getTotal();
        document.getElementById('display').innerHTML = display;
        break;
      case 'subtract' :
        calculatorModule.subtract(display);
        display = calculatorModule.getTotal();
        document.getElementById('display').innerHTML = display;
        break;
      case 'multiply' :
        calculatorModule.multiply(display);
        display = calculatorModule.getTotal();
        document.getElementById('display').innerHTML = display;
        break;
      case 'divide' :
        calculatorModule.divide(display);
        display = calculatorModule.getTotal();
        document.getElementById('display').innerHTML = display;
        break;
    }
  }
  newFunction = false;
    functionKey = null;
    contFunction = null;
});

document.getElementById("subtract").addEventListener('click',function(){
  if(!functionKey && !contFunction){
    calculatorModule.load(display);
    //displayArray = [];
     //display = Number(displayArray.join(''));
    document.getElementById('display').innerHTML = display;
    newFunction = true;
    functionKey = 'subtract';
  } else {
    switch (functionKey){
      case 'add' : calculatorModule.add(display);
                    contFunction = 'add';
        break;
      case 'subtract' : calculatorModule.subtract(display);
                        contFunction = 'subtract';
        break;
      case 'multiply' : calculatorModule.multiply(display);
                        contFunction = 'multiply'
        break;
      case 'divide' : calculatorModule.divide(display);
                      contFunction = 'divide'
        break;
    }
  }
});

document.getElementById("multiply").addEventListener('click',function(){
  if(!functionKey && !contFunction){
    calculatorModule.load(display);
    //displayArray = [];
     //display = Number(displayArray.join(''));
    document.getElementById('display').innerHTML = display;
    newFunction = true;
    functionKey = 'multiply';
  } else {
    switch (functionKey){
      case 'add' : calculatorModule.add(display);
                    contFunction = 'add';
        break;
      case 'subtract' : calculatorModule.subtract(display);
                        contFunction = 'subtract';
        break;
      case 'multiply' : calculatorModule.multiply(display);
                        contFunction = 'multiply'
        break;
      case 'divide' : calculatorModule.divide(display);
                      contFunction = 'divide'
        break;
    }
  }
});

document.getElementById("divide").addEventListener('click',function(){
  if(!functionKey && !contFunction){
    calculatorModule.load(display);
    //displayArray = [];
     //display = Number(displayArray.join(''));
    document.getElementById('display').innerHTML = display;
    newFunction = true;
    functionKey = 'divide';
  } else {
    switch (functionKey){
      case 'add' : calculatorModule.add(display);
                    contFunction = 'add';
        break;
      case 'subtract' : calculatorModule.subtract(display);
                        contFunction = 'subtract';
        break;
      case 'multiply' : calculatorModule.multiply(display);
                        contFunction = 'multiply'
        break;
      case 'divide' : calculatorModule.divide(display);
                      contFunction = 'divide'
        break;
    }
  }
});

document.getElementById("clear").addEventListener('click',function(){
  displayArray = [];
  display = Number(displayArray.join(''));
  document.getElementById('display').innerHTML = display;
});
document.getElementById("depositCash").addEventListener('click',function(){
  calculatorModule.saveMemory();
  document.getElementById('display').innerHTML = 'deposited' + ' ' + '$'+display;
});
document.getElementById("withdrawCash").addEventListener('click',function(){
  var previousBalance = calculatorModule.recallMemory();
  calculatorModule.withdraw();
  if(calculatorModule.recallMemory() === calculatorModule.recallMemory() && display !== 0){
    document.getElementById('display').innerHTML = 'The request exceeds your balance'
  } else
  document.getElementById('display').innerHTML = 'withdrawing' + ' ' + '$'+display;
});
document.getElementById("getBalance").addEventListener('click',function(){
  document.getElementById('display').innerHTML = 'you have' + ' $'+ calculatorModule.recallMemory();
});


