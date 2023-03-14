import handleClick from '../modules/handleButtonClick.js';
import clearScreen from '../modules/clearScreen.js';
import calculate from '../modules/calculate.js';

const charKey = document.querySelectorAll('.char-key');
const clearBtn = document.getElementById('clear');
const equalBtn = document.getElementById('equal');

charKey.forEach((button) => {
    button.addEventListener('click', handleClick(button));
});

clearBtn.addEventListener('click', clearScreen);

equalBtn.addEventListener('click', calculate);
