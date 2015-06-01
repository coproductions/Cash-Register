var cashRegisterModule = (function(){
  var balance = 0;
  var value = 0;
  var memory = 0;

  var functionKey = null;
  var contFunction = null;
  var newFunction = false;
  var blockCalc = false;
  var equalsSwitch = false;

  var displayArray = [];
  var display = 0;


  document.getElementById('display').innerHTML = memory;
  document.getElementById("display").style.padding = "1px 3px 1px 5px";

  var _buttonOne = function(){
    equalsTest();
    if (!newFunction  && !contFunction){
      displayArray.push(1);
       display = Number(displayArray.join(''));
      document.getElementById('display').innerHTML = display;
    } else if (contFunction){
        displayArray = [];
        displayArray.push(1);
        display = Number(displayArray.join(''));
        document.getElementById('display').innerHTML = display;
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
    operatorSymbol();
  };

  var _buttonTwo = function(){
    equalsTest();
  if (!newFunction  && !contFunction){
      displayArray.push(2);
       display = Number(displayArray.join(''));
      document.getElementById('display').innerHTML = display;
    } else if (contFunction){
        displayArray = [];
        displayArray.push(2);
        display = Number(displayArray.join(''));
        document.getElementById('display').innerHTML = display;
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
    operatorSymbol();
  };

  var _buttonThree = function(){
    equalsTest();
    if (!newFunction  && !contFunction){
      displayArray.push(3);
       display = Number(displayArray.join(''));
      document.getElementById('display').innerHTML = display;
    } else if (contFunction){
        displayArray = [];
        displayArray.push(3);
        display = Number(displayArray.join(''));
        document.getElementById('display').innerHTML = display;
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
    operatorSymbol();
  };

  var _buttonFour = function(){
    equalsTest();
    if (!newFunction  && !contFunction){
      displayArray.push(4);
       display = Number(displayArray.join(''));
      document.getElementById('display').innerHTML = display;
    } else if (contFunction){
        displayArray = [];
        displayArray.push(4);
        display = Number(displayArray.join(''));
        document.getElementById('display').innerHTML = display;
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
    operatorSymbol();
  };

  var _buttonFive = function(){
    equalsTest();
    if (!newFunction  && !contFunction){
      displayArray.push(5);
       display = Number(displayArray.join(''));
      document.getElementById('display').innerHTML = display;
    } else if (contFunction){
        displayArray = [];
        displayArray.push(5);
        display = Number(displayArray.join(''));
        document.getElementById('display').innerHTML = display;

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
    operatorSymbol();
  };

  var _buttonSix = function(){
    equalsTest();
    if (!newFunction  && !contFunction){
      displayArray.push(6);
       display = Number(displayArray.join(''));
      document.getElementById('display').innerHTML = display;
    } else if (contFunction){
        displayArray = [];
        displayArray.push(6);
        display = Number(displayArray.join(''));
        document.getElementById('display').innerHTML = display;
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
    operatorSymbol();
  };

  var _buttonSeven = function(){
    equalsTest();
    if (!newFunction  && !contFunction){
      displayArray.push(7);
       display = Number(displayArray.join(''));
      document.getElementById('display').innerHTML = display;
    } else if (contFunction){
        displayArray = [];
        displayArray.push(7);
        display = Number(displayArray.join(''));
        document.getElementById('display').innerHTML = display;
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
    operatorSymbol();
  };

  var _buttonEight = function(){
    equalsTest();
    if (!newFunction  && !contFunction){
      displayArray.push(8);
       display = Number(displayArray.join(''));
      document.getElementById('display').innerHTML = display;
    } else if (contFunction){
        displayArray = [];
        displayArray.push(8);
        display = Number(displayArray.join(''));
        document.getElementById('display').innerHTML = display;
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
    operatorSymbol();
  };

  var _buttonNine = function(){
    equalsTest();
    if (!newFunction  && !contFunction){
      displayArray.push(9);
       display = Number(displayArray.join(''));
      document.getElementById('display').innerHTML = display;
    } else if (contFunction){
        displayArray = [];
        displayArray.push(9);
        display = Number(displayArray.join(''));
        document.getElementById('display').innerHTML = display;
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
    operatorSymbol();
  };

  var _buttonZero = function(){
    equalsTest();
    if (!newFunction  && !contFunction){
      displayArray.push(0);
       display = Number(displayArray.join(''));
      document.getElementById('display').innerHTML = display;
    } else if (contFunction){
        displayArray = [];
        displayArray.push(0);
        display = Number(displayArray.join(''));
        document.getElementById('display').innerHTML = display;
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
    operatorSymbol();
  };

  var _buttonDoubleZero = function(){
    equalsTest();
    if (!newFunction  && !contFunction){
      displayArray.push(0,0);
       display = Number(displayArray.join(''));
      document.getElementById('display').innerHTML = display;
    } else if (contFunction){
        displayArray = [];
        displayArray.push(0,0);
        display = Number(displayArray.join(''));
        document.getElementById('display').innerHTML = display;
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
    operatorSymbol();
  };

  var _buttonDot = function(){
    equalsTest();
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
    operatorSymbol();
  };

  var _buttonAdd = function(){
    if(!blockCalc){
      if(!functionKey && !contFunction){
        memory = display;
        calculatorModule.load(memory);
        //displayArray = [];
         //display = Number(displayArray.join(''));
        document.getElementById('display').innerHTML = display;
        newFunction = true;
        functionKey = 'add';
      } else {
        memory = display;
        switch (functionKey){
          case 'add' : calculatorModule.add(memory);
                        contFunction = 'add';
            break;
          case 'subtract' : calculatorModule.subtract(memory);
          contFunction = 'subtract';
            break;
          case 'multiply' : calculatorModule.multiply(memory);
          contFunction = 'multiply';
            break;
          case 'divide' : calculatorModule.divide(memory);
          contFunction = 'divide';
            break;
        }
        functionKey = 'add';
      }
      blockCalc = true;
    }
    operatorSymbol();
  };

  var _buttonSubtract = function(){
    if(!functionKey && !contFunction){
      memory = display;
      calculatorModule.load(memory);
      document.getElementById('display').innerHTML = memory;
      newFunction = true;
      functionKey = 'subtract';
    } else {
      memory = display;
      switch (functionKey){
        case 'add' : calculatorModule.add(memory);
                      contFunction = 'add';
          break;
        case 'subtract' : calculatorModule.subtract(memory);
                          contFunction = 'subtract';
          break;
        case 'multiply' : calculatorModule.multiply(memory);
                          contFunction = 'multiply'
          break;
        case 'divide' : calculatorModule.divide(memory);
                        contFunction = 'divide'
          break;
      }
      functionKey = 'subtract';
    }
    operatorSymbol();
  };

  var _buttonMultiply = function(){
    if(!functionKey && !contFunction){
      memory = display;
      calculatorModule.load(memory);
      //displayArray = [];
       //display = Number(displayArray.join(''));
      document.getElementById('display').innerHTML = memory;
      newFunction = true;
      functionKey = 'multiply';
    } else {
      memory = display;
      switch (functionKey){
        case 'add' : calculatorModule.add(memory);
                      contFunction = 'add';
          break;
        case 'subtract' : calculatorModule.subtract(memory);
                          contFunction = 'subtract';
          break;
        case 'multiply' : calculatorModule.multiply(memory);
                          contFunction = 'multiply'
          break;
        case 'divide' : calculatorModule.divide(memory);
                        contFunction = 'divide'
          break;
      }
      functionKey = 'multiply';
    }
    operatorSymbol();
  };

  var _buttonDivide = function(){
    if(!functionKey && !contFunction){
      memory = display;
      calculatorModule.load(memory);
      //displayArray = [];
       //display = Number(displayArray.join(''));
      document.getElementById('display').innerHTML = memory;
      newFunction = true;
      functionKey = 'divide';
    } else {
      memory = display;
      switch (functionKey){
        case 'add' : calculatorModule.add(memory);
                      contFunction = 'add';
          break;
        case 'subtract' : calculatorModule.subtract(memory);
                          contFunction = 'subtract';
          break;
        case 'multiply' : calculatorModule.multiply(memory);
                          contFunction = 'multiply'
          break;
        case 'divide' : calculatorModule.divide(memory);
                        contFunction = 'divide'
          break;
      }
      functionKey = 'divide';
    }
    operatorSymbol();
  };

  var _buttonEquals = function(){

      if(!functionKey){
        calculatorModule.load(display);
        displayArray = [];
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
      memory = 0;
      operatorSymbol();
      equalsSwitch = true;


    //blockCalc = true;
  };

  var _buttonClear = function(){
    displayArray = [];
    display = Number(displayArray.join(''));
    document.getElementById('display').innerHTML = display;
    blockCalc = false;
    functionKey = null;
    contFunction = null;
    newFunction = false;
    operatorSymbol();
  };

  var _buttonDeposit = function(){
    cashRegisterModule.depositCash();
    document.getElementById('display').innerHTML = 'deposited' + ' ' + '$'+display;
    displayArray = [];
    operatorSymbol();
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
    operatorSymbol();
  };

  var _buttonBalance = function(){
    document.getElementById('display').innerHTML = 'you have' + ' $'+ cashRegisterModule.getBalance();
    displayArray = [];
    operatorSymbol();
  };

  var operatorSymbol = function(){
    if(functionKey){
      switch(functionKey){
        case 'add' : document.getElementById('operator').innerHTML = "+";
        break;
        case 'subtract' : document.getElementById('operator').innerHTML = "-";
        break;
        case 'divide' : document.getElementById('operator').innerHTML = "/";
        break;
        case 'multiply' : document.getElementById('operator').innerHTML = "*";
        break;
        default : document.getElementById('operator').innerHTML = "";
      }
    } else document.getElementById('operator').innerHTML = "";

  }

  var equalsTest = function(){
    if(equalsSwitch){
      displayArray = [];
      equalsSwitch = false;
    }
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
// document.getElementByClassName('operatorButton').addEventListener('click',function(){
//   document.getElementById('operator').innerHTML = 'ien';
// });

document.getElementById("one").addEventListener('click',cashRegisterModule.one);
document.getElementById("two").addEventListener('click',cashRegisterModule.two);
document.getElementById("three").addEventListener('click',cashRegisterModule.three);
document.getElementById("four").addEventListener('click',cashRegisterModule.four);
document.getElementById("five").addEventListener('click',cashRegisterModule.five);
document.getElementById("six").addEventListener('click',cashRegisterModule.six);
document.getElementById("seven").addEventListener('click',cashRegisterModule.seven);
document.getElementById("eight").addEventListener('click',cashRegisterModule.eight);
document.getElementById("nine").addEventListener('click',cashRegisterModule.nine);
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


//create an equal button variable to fix equal button bug that occurs with blockCalc variable
//pressing plus a number of times messes things up