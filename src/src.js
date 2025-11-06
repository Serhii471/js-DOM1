document.addEventListener('DOMContentLoaded', () => {

    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');

    const addBtn = document.getElementById('addBtn');
    const subtractBtn = document.getElementById('subtractBtn');
    const multiplyBtn = document.getElementById('multiplyBtn');
    const divideBtn = document.getElementById('divideBtn');

    const resultOutput = document.getElementById('result');
    const errorOutput = document.getElementById('errorMessage');

    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function divide(a, b) {
        return a / b;
    }

    function getAndValidateNumbers() {
        errorOutput.textContent = '';

        const val1 = num1Input.value.trim();
        const val2 = num2Input.value.trim();

        if (val1 === '' || val2 === '') {
            errorOutput.textContent = 'Будь ласка, заповніть обидва поля.';
            return null;
        }
        
        const num1 = parseFloat(val1.replace(',', '.'));
        const num2 = parseFloat(val2.replace(',', '.'));

        if (isNaN(num1) || isNaN(num2)) {
            errorOutput.textContent = 'Введено некоректні дані. Будь ласка, введіть числа.';
            return null;
        }

        return { num1, num2 };
    }

    function displayResult(res) {
        let formattedResult;

        if (res % 1 !== 0) {
            formattedResult = Math.round(res * 100) / 100;
        } else {
            formattedResult = res;
        }

        resultOutput.textContent = formattedResult;
    }

    addBtn.addEventListener('click', () => {
        const numbers = getAndValidateNumbers();
        
        if (numbers) {
            const result = add(numbers.num1, numbers.num2);
            displayResult(result);
        } else {
            resultOutput.textContent = '0';
        }
    });

    subtractBtn.addEventListener('click', () => {
        const numbers = getAndValidateNumbers();
        
        if (numbers) {
            const result = subtract(numbers.num1, numbers.num2);
            displayResult(result);
        } else {
            resultOutput.textContent = '0';
        }
    });

    multiplyBtn.addEventListener('click', () => {
        const numbers = getAndValidateNumbers();
        
        if (numbers) {
            const result = multiply(numbers.num1, numbers.num2);
            displayResult(result);
        } else {
            resultOutput.textContent = '0';
        }
    });

    divideBtn.addEventListener('click', () => {
        const numbers = getAndValidateNumbers();
        
        if (numbers) {
            if (numbers.num2 === 0) {
                errorOutput.textContent = 'Ділення на нуль неможливе.';
                resultOutput.textContent = '0';
            } else {
                const result = divide(numbers.num1, numbers.num2);
                displayResult(result);
            }
        } else {
            resultOutput.textContent = '0';
        }
    });
});