document.addEventListener('DOMContentLoaded', () => {
  const inputDivs = document.querySelectorAll('label div');
  const cardForm = document.getElementById('form-card-info');
  const labelCardNumber = document.getElementById('label-number');
  const inputCardNumber = document.getElementById('input-card-number');
  const submitBtn = document.getElementById('form-submit-btn');
  const formInputName = document.getElementById('form-input-name');
  const formInputMonth = document.getElementById('form-input-month');
  const formInputYear = document.getElementById('form-input-year');
  const formInputCvc = document.getElementById('form-input-cvc');

  function validateForm() {
    // Card name should be two words of letters?
    const cardNameRegEx = /^((?:[A-Za-z]+ ?){1,3})$/;
    const cardNumberRegEx = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
    const cardMonthRegEx = /^\d{1,2}$/;
    const cardYearRegEx = /^20[2-5]\d{1}$/;
    const cardCvcRegEx = /^\d{3}$/;
    
    if (cardNameRegEx.test(formInputName.value) && cardNumberRegEx.test(inputCardNumber.value) && cardMonthRegEx.test(formInputMonth.value) && cardYearRegEx.test(formInputYear.value) && cardCvcRegEx.test(formInputCvc.value)) {
      console.log('Form validated');
    }
  }

  for (let i = 0; i < inputDivs.length; i++) {
    const inputDiv = inputDivs[i];

    inputDiv.addEventListener('click', (e) => {
      const currentlySelectedInputDiv = document.querySelector('label div.focus');
      if (e.target === currentlySelectedInputDiv) {
      } else {
        if (currentlySelectedInputDiv) {
          currentlySelectedInputDiv.classList.remove('focus');
        }
        inputDiv.classList.add('focus');
      }
    });
  }

  inputCardNumber.addEventListener('input', (e) => {
    // If input has no data (space or backspace), then return true and event proceeds as normal.
    if (!e.data) {
      return true;
    }

    // Else run javascript logic check for correct input.
    let numberArray;
    if (e.target.value.length > 4) {
      numberArray = e.target.value.split(' ');
    } else {
      numberArray = e.target.value.split('');
    }

    // Going through numbers typed in input box.
    // if character cannot be parsed as a number, then we want to add an error.
    for (let i = 0; i < numberArray.length; i++) {
      if (isNaN(numberArray[i])) {
        labelCardNumber.children[0].classList.add('error');
        labelCardNumber.children[1].classList.remove('hide');
      } else {
        if (labelCardNumber.children[0].classList.contains('error')) {
          labelCardNumber.children[0].classList.remove('error');
          labelCardNumber.children[1].classList.add('hide');
        }
      }
    }

    if (e.target.value.length > 4) {
      numberArray = numberArray.join('');
    }

    // Add a space after 4 digits.
    if (numberArray.length % 4 === 0 && e.target.value.length < 19 && !isNaN(e.data)) {
      e.target.value = `${e.target.value} `;
    }
  });

  formInputMonth.addEventListener('input', (e) => {
    const monthError = document.getElementById('exp-date-error');
    const divMonth = document.getElementById('div-input-month');
    if (isNaN(e.data) || !e.data) {
      return false;
    }

    if (formInputMonth.value.length > 2) {
      formInputMonth.value = formInputMonth.value.slice(0, -1);
    }

    if (formInputMonth.value > 12) {
      monthError.classList.remove('hide');
      divMonth.classList.add('error');
    } else {
      if (!monthError.classList.contains('hide')) {
        monthError.classList.add('hide');
        divMonth.classList.remove('error');
      }
    }
  });

  formInputYear.addEventListener('input', (e) => {
    const yearError = document.getElementById('exp-date-error');
    const divYear = document.getElementById('div-input-year')
    if (isNaN(e.data) || !e.data) {
      return false;
    }

    if (formInputYear.value.length > 4) {
      formInputYear.value = formInputYear.value.slice(0, -1);
    }

    if (formInputYear.value.length === 4 && formInputYear.value < 2023) {
      yearError.classList.remove('hide');
      divYear.classList.add('error');
    } else {
      if (!yearError.classList.contains('hide')) {
        yearError.classList.add('hide');
        divYear.classList.remove('error');
      }
    }
  });

  formInputCvc.addEventListener('input', (e) => {

  });

  // When confirm button is clicked, we need to check to make sure all fields have been filled.
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Check to make sure all the form fields have values.
    if (!formInputName.value || !inputCardNumber.value || !formInputMonth.value || !formInputYear.value || !formInputCvc.value) {
      console.log('stop.');
    }
    // Check to make sure all the form fields have correct values.
    if (validateForm()) {

    } else { // form is not validated

    }
  });
});