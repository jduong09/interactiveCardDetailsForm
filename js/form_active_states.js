document.addEventListener('DOMContentLoaded', () => {
  const inputDivs = document.querySelectorAll('label div');
  const labelCardNumber = document.getElementById('label-number');

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

  labelCardNumber.addEventListener('input', (e) => {
    let numberArray;
    if (e.target.value.length > 4) {
      numberArray = e.target.value.split(' ');
    } else {
      numberArray = e.target.value.split('');
    }

    console.log(numberArray);
    // Going through numbers typed in input box.
    // if character cannot be parsed as a number, then we want to add an error.
    for (let i = 0; i < numberArray.length; i++) {
      if (isNaN(numberArray[i])) {
        console.log('error');
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
      console.log(numberArray);
    }

    // Add a space after 4 digits.

    if (numberArray.length % 4 === 0 && e.target.value.length < 19) {
      console.log('need to add space');
      e.target.value = `${e.target.value} `;
    }
  });

  const submitBtn = document.getElementById('form-submit-btn');

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const cardNumberInput = labelCardNumber.children[0].children[0].value;
    console.log((cardNumberInput).toString());
    const regEx = new RegExp('^4[0-9]{12}(?:[0-9]{3})?$');

    console.log(regEx.test(cardNumberInput));
  });
});