const masterBtn = document.getElementById('masterBtn');
const visaBtn = document.getElementById('visaBtn');
const cardNumberInput = document.getElementById('cardNumber');
const expMonthInput = document.getElementById('expMonth');
const expYearInput = document.getElementById('expYear');
const cvvInput = document.getElementById('cvv');
const cardNameInput = document.getElementById('cardName');
const paymentForm = document.getElementById('paymentForm');

const cardTab = document.getElementById('cardTab');
const mfsTab = document.getElementById('mfsTab');
const cardSelectionBox = document.getElementById('cardSelectionBox');
const mfsSelectionBox = document.getElementById('mfsSelectionBox');
const cardFields = document.getElementById('cardFields');
const mfsFields = document.getElementById('mfsFields');
const bkashBtn = document.getElementById('bkashBtn');
const nagadBtn = document.getElementById('nagadBtn');
const mfsAccountNumberInput = document.getElementById('mfsAccountNumber');

// Success element target reference
const successStatus = document.getElementById('successStatus');

cardTab.addEventListener('click', function() {
    cardTab.classList.add('active');
    mfsTab.classList.remove('active');
    cardSelectionBox.classList.remove('hidden');
    mfsSelectionBox.classList.add('hidden');
    cardFields.classList.remove('hidden');
    mfsFields.classList.add('hidden');
    
    mfsAccountNumberInput.removeAttribute('required');
    cardNumberInput.setAttribute('required', '');
    expMonthInput.setAttribute('required', '');
    expYearInput.setAttribute('required', '');
    cvvInput.setAttribute('required', '');
    cardNameInput.setAttribute('required', '');
});

mfsTab.addEventListener('click', function() {
    mfsTab.classList.add('active');
    cardTab.classList.remove('active');
    mfsSelectionBox.classList.remove('hidden');
    cardSelectionBox.classList.add('hidden');
    mfsFields.classList.remove('hidden');
    cardFields.classList.add('hidden');
    
    cardNumberInput.removeAttribute('required');
    expMonthInput.removeAttribute('required', '');
    expYearInput.removeAttribute('required', '');
    cvvInput.removeAttribute('required', '');
    cardNameInput.removeAttribute('required', '');
    mfsAccountNumberInput.setAttribute('required', '');
});

masterBtn.addEventListener('click', function() {
    masterBtn.classList.add('active');
    visaBtn.classList.remove('active');
});

visaBtn.addEventListener('click', function() {
    visaBtn.classList.add('active');
    masterBtn.classList.remove('active');
});


bkashBtn.addEventListener('click', function() {
    bkashBtn.classList.add('active');
    nagadBtn.classList.remove('active');
});

nagadBtn.addEventListener('click', function() {
    nagadBtn.classList.add('active');
    bkashBtn.classList.remove('active');
});

paymentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    successStatus.classList.remove('hidden');
    paymentForm.reset(); 
    setTimeout(function() {
        successStatus.classList.add('hidden');
    }, 4000);
});

function onlyAllowNumbers(inputElement) {
    inputElement.addEventListener('keydown', function(event) {
        const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab', 'Delete'];
        
        if (allowedKeys.includes(event.key)) {
            return;
        }
        
        if (isNaN(event.key)) {
            event.preventDefault();
        }
    });
}

function onlyAllowLetters(inputElement) {
    inputElement.addEventListener('keydown', function(event) {
        const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab', 'Delete'];
        const isLetter = (event.key >= 'a' && event.key <= 'z') || (event.key >= 'A' && event.key <= 'Z');
        
        if (allowedKeys.includes(event.key)) {
            return;
        }
        
        if (event.key === ' ') {
            return;
        }
        
        if (!isLetter) {
            event.preventDefault();
        }
    });
}

onlyAllowNumbers(cardNumberInput);
onlyAllowNumbers(expMonthInput);
onlyAllowNumbers(expYearInput);
onlyAllowNumbers(cvvInput);
onlyAllowNumbers(mfsAccountNumberInput);

onlyAllowLetters(cardNameInput);