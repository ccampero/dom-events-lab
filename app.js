/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');



/*-------------------------------- Variables --------------------------------*/
let currentValue = "";
let storedValue = "";
let operator = ""
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
    console.log(event.target.innerText);
    
    });
  });

  calculator.addEventListener('click', (event) => {
    const target = event.target;
    console.log(event.target.innerText);
  
    
/*-------------------------------- Functions --------------------------------*/
if (event.target.classList.contains('number')) {
    currentValue += target.innerText;
    display.innerText = currentValue;
  } else if (target.classList.contains('operator')) {
      if (target.innerText === 'C'){
          currentValue = "";
          storedValue = '';
          operator = '';
          display.innerText = '';
      } else {
          operator = target.innerText;
          storedValue = currentValue;
          currentValue = '';
      }
  } else if (target.classList.contains('equals')){
      if (operator && storedValue){
          const a = parseFloat(storedValue);
          const b = parseFloat(currentValue);

          switch (operator) {
              case '+':
                  currentValue = a + b;
                  break;
                  case'-':
                  currentValue= a - b;
                  break;
                  case '*':
                  currentValue= a * b;
                  break;
                  case '/':
                      currentValue = a / b;
                      break;
          }
          display.innerText = currentValue;
          storedValue = '';
          operator = '';
      }
  }
});