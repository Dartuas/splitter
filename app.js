const billAmountInput = document.getElementById('bill');
const numberOfPeopleInput = document.getElementById('numberOfPeople');
const customInput = document.getElementById('custom');
const calculateButton = document.getElementById('calculate');
const tipAmountText = document.getElementById('counterTip');
const totalPerPersonText = document.getElementById('counterTotal');
// Зберігаємо початкові стилі кнопки
const initialButtonStyles = calculateButton.style.cssText;

// Функція для відновлення початкових стилів кнопки
function resetButtonStyles() {
    calculateButton.style.cssText = initialButtonStyles;
  }

//перевірка input на введення значень користувачем
function updateCalculateButtonState() {
    if (billAmountInput.value && numberOfPeopleInput.value && !customInput.value ) {

        // значення присутні, активуємо кнопку і надаємо їй стилізації
        calculateButton.disabled = false;
        calculateButton.style.backgroundColor = 'rgba(159, 232, 223, 1)';
        calculateButton.style.color = '#00474B';
        calculateButton.style.fontFamily = 'Space Mono, monospace';
        calculateButton.style.fontStyle = 'normal';
        calculateButton.style.lineHeight = '30px';
        calculateButton.style.fontWeight = '700';
        calculateButton.style.fontSize = '20px';
        calculateButton.style.opacity = '1';

    } else {
        // якщо хоч один із полей пусті кнопка деактевована
        calculateButton.disabled = true;
        resetButtonStyles();
    }
}

// виклик обробки події для перевірки введення значення в реальному часі,а не тільки під час загруки сторінки один раз коли поля пусті, для активації або деактивації кнопки
billAmountInput.addEventListener('input', updateCalculateButtonState);
numberOfPeopleInput.addEventListener('input', updateCalculateButtonState);

calculateButton.addEventListener('click', function () {

    const originalBillAmount = Number(billAmountInput.value); // поточна сума чеку
    console.log(originalBillAmount);
    const numberOfP = Number(numberOfPeopleInput.value) // кількість осіб
    console.log(numberOfP);

    const selectedRadioTip = document.querySelector('input[name="tip"]:checked');
    console.log(selectedRadioTip.value);
    const tipPersentage = Number(selectedRadioTip.value.slice(0, -1)) / 100;
    console.log(tipPersentage);

    const totalTip = Math.round(originalBillAmount * tipPersentage * 100) / 100
    console.log(totalTip);


    const totalBill = originalBillAmount + totalTip
    const perPerson = Math.round(totalBill / numberOfP * 100) / 100;


    tipAmountText.innerText = "$" + totalTip;
    totalPerPersonText.innerText = "$" + perPerson;

})

customInput.addEventListener('input', disebleChekbox);

// Запуск функції, перевіряємо стан кнопки після завантаження сторінки
updateCalculateButtonState();

// const billAmountInput = document.getElementById('bill');
// const numberOfPeopleInput = document.getElementById('numberOfPeople');
// const customInput = document.getElementById('custom');
// const calculateButton = document.getElementById('calculate');
// const tipAmountText = document.getElementById('counterTip');
// const totalPerPersonText = document.getElementById('counterTotal');

// // Перевірка input на введення значень користувачем
// function updateCalculateButtonState() {
//     if (billAmountInput.value && numberOfPeopleInput.value) {
//         // значення присутні, активуємо кнопку і надаємо їй стилізації
//         calculateButton.disabled = false;
//         calculateButton.style.backgroundColor = 'rgba(159, 232, 223, 1)';
//         calculateButton.style.color = '#00474B';
//         calculateButton.style.fontFamily = 'Space Mono, monospace';
//         calculateButton.style.fontStyle = 'normal';
//         calculateButton.style.lineHeight = '30px';
//         calculateButton.style.fontWeight = '700';
//         calculateButton.style.fontSize = '20px';
//         calculateButton.style.opacity = '1';
//     } else {
//         // якщо хоч один із полей пусті кнопка деактивована
//         calculateButton.disabled = true;
//     }
// }

// // Виклик обробки події для перевірки введення значення в реальному часі, а не тільки під час завантаження сторінки один раз, коли поля пусті, для активації або деактивації кнопки
// billAmountInput.addEventListener('input', updateCalculateButtonState);
// numberOfPeopleInput.addEventListener('input', updateCalculateButtonState);

// calculateButton.addEventListener('click', function () {
//     const originalBillAmount = Number(billAmountInput.value); // поточна сума чеку
//     const numberOfP = Number(numberOfPeopleInput.value); // кількість осіб

//     const selectedRadioTip = document.querySelector('input[name="tip"]:checked');
//     const tipPersentage = Number(selectedRadioTip.value.slice(0, -1)) / 100;

//     const totalTip = Math.round(originalBillAmount * tipPersentage * 100) / 100;
//     const totalBill = originalBillAmount + totalTip;
//     const perPerson = Math.round(totalBill / numberOfP * 100) / 100;

//     tipAmountText.innerText = "$" + totalTip;
//     totalPerPersonText.innerText = "$" + perPerson;
// });

// customInput.addEventListener('input', function () {
//     if (!customInput.value) {
//         calculateButton.disabled = true;
//     }
// });

// // Запуск функції, перевіряємо стан кнопки після завантаження сторінки
// updateCalculateButtonState();
