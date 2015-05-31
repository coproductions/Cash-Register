var cashRegisterModule = (function(){
  var balance = 0;
  var value = 0;

  var functionKey = null;
  var contFunction = null;
  var newFunction = false;
  var blockCalc = false;

  var displayArray = [];
  var display = 0;

  document.getElementById('display').innerHTML = display;
  document.getElementById("display").style.padding = "1px 3px 1px 5px";

  var _buttonOne = function(){
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
          case 'subtract' :
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
    blockCalc = false;
  };

  var _buttonTwo = function(){
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
    blockCalc = false;
  };

  var _buttonThree = function(){
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
    blockCalc = false;
  };

  var _buttonFour = function(){
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
    blockCalc = false;
  };

  var _buttonFive = function(){
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
    blockCalc = false;
  };

  var _buttonSix = function(){
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
    blockCalc = false;
  };

  var _buttonSeven = function(){
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
    blockCalc = false;
  };

  var _buttonEight = function(){
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
    blockCalc = false;
  };

  var _buttonNine = function(){
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
    blockCalc = false;
  };

  var _buttonZero = function(){
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
    blockCalc = false;
  };

  var _buttonDoubleZero = function(){
    if (!newFunction  && !contFunction){
      displayArray.push(0,0);
       display = Number(displayArray.join(''));
      document.getElementById('display').innerHTML = display;
    } else if (contFunction){
        switch (contFunction){
          case 'add' : //calculatorModule.add(display);
                      document.getElementById('display').innerHTML = display;
                      displayArray = [];
                      displayArray.push(0,0);
                      display = Number(displayArray.join(''));
          break;
        }
      }

    else {
      calculatorModule.storeTotal(display);
      displayArray = [];
      displayArray.push(0,0);
       display = Number(displayArray.join(''));
      document.getElementById('display').innerHTML = display;
      newFunction = false;
      contFunction = null;
    }
    blockCalc = false;
  };

  var _buttonDot = function(){
    if (!newFunction  && !contFunction){
      displayArray.push('.');
      if(displayArray.length === 1){
        display = displayArray.join('');
        document.getElementById('display').innerHTML = display;
      } else {
       display = Number(displayArray.join(''));
      document.getElementById('display').innerHTML = display+'.';
      }
    } else if (contFunction){
        document.getElementById('display').innerHTML = display;
        displayArray = [];
        displayArray.push('.');
        display = Number(displayArray.join(''));
      }
    else {
      calculatorModule.storeTotal(display);
      displayArray = [];
      displayArray.push('.');
      if(displayArray.length === 1){
        display = displayArray.join('');
        document.getElementById('display').innerHTML = display;
      } else {
       display = Number(displayArray.join(''));
      document.getElementById('display').innerHTML = display+'.';
      }
      newFunction = false;
      contFunction = null;
    }
  };

  var _buttonAdd = function(){
    if(!blockCalc){
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
      blockCalc = true;
    }
  };

  var _buttonSubtract = function(){
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
  };

  var _buttonMultiply = function(){
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
  };

  var _buttonDivide = function(){
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
  };

  var _buttonEquals = function(){
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
    blockCalc = true;
  };

  var _buttonClear = function(){
    displayArray = [];
    display = Number(displayArray.join(''));
    document.getElementById('display').innerHTML = display;
  };

  var _buttonDeposit = function(){
    cashRegisterModule.depositCash();
    document.getElementById('display').innerHTML = 'deposited' + ' ' + '$'+display;
    displayArray = [];
  };

  var _buttonWithdraw = function(){
    var previousBalance = cashRegisterModule.getBalance();
    cashRegisterModule.withdrawCash();
    if(cashRegisterModule.getBalance() === previousBalance && display !== 0){
      document.getElementById('display').innerHTML = 'The request exceeds your balance'
      displayArray = [];
    } else
    document.getElementById('display').innerHTML = 'withdrawing' + ' ' + '$'+display;
    displayArray = [];
  };

  var _buttonBalance = function(){
    document.getElementById('display').innerHTML = 'you have' + ' $'+ cashRegisterModule.getBalance();
    displayArray = [];
  };

  return {
    one : _buttonOne,
    two : _buttonTwo,
    three : _buttonThree,
    four : _buttonFour,
    five : _buttonFive,
    six : _buttonSix,
    seven : _buttonSeven,
    eight : _buttonEight,
    nine : _buttonNine,
    zero : _buttonZero,
    doubleZero : _buttonDoubleZero,
    add : _buttonAdd,
    subtract : _buttonSubtract,
    multiply : _buttonMultiply,
    divide : _buttonDivide,
    dot : _buttonDot,
    equals : _buttonEquals,
    clear : _buttonClear,
    deposit : _buttonDeposit,
    balance : _buttonBalance,
    withdraw : _buttonWithdraw,

    getBalance : function(){
      return balance;
    },
    depositCash : function(amount){
      balance += display;
    },
    withdrawCash : function(){
      if(balance >= display){
        balance -= display;
      }
    }
  };

})();


document.getElementById("one").addEventListener('click',cashRegisterModule.one);
document.getElementById("two").addEventListener('click',cashRegisterModule.two);
document.getElementById("three").addEventListener('click',cashRegisterModule.three);
document.getElementById("four").addEventListener('click',cashRegisterModule.four);
document.getElementById("five").addEventListener('click',cashRegisterModule.five);
document.getElementById("six").addEventListener('click',cashRegisterModule.six);
document.getElementById("seven").addEventListener('click',cashRegisterModule.seven);
document.getElementById("eight").addEventListener('click',cashRegisterModule.nine);
document.getElementById("nine").addEventListener('click',cashRegisterModule.eight);
document.getElementById("zero").addEventListener('click',cashRegisterModule.zero);
document.getElementById("zeroZero").addEventListener('click',cashRegisterModule.doubleZero);
document.getElementById("dot").addEventListener('click',cashRegisterModule.dot);
document.getElementById("add").addEventListener('click',cashRegisterModule.add);
document.getElementById("subtract").addEventListener('click',cashRegisterModule.subtract);
document.getElementById("multiply").addEventListener('click',cashRegisterModule.multiply);
document.getElementById("divide").addEventListener('click',cashRegisterModule.divide);
document.getElementById("equals").addEventListener('click',cashRegisterModule.equals);
document.getElementById("clear").addEventListener('click',cashRegisterModule.clear);
document.getElementById("depositCash").addEventListener('click',cashRegisterModule.deposit);
document.getElementById("withdrawCash").addEventListener('click',cashRegisterModule.withdraw);
document.getElementById("getBalance").addEventListener('click',cashRegisterModule.balance);

//make memory instead of using display
//create an equal button variable to fix equal button bug that occurs with blockCalc variable