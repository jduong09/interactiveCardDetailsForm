function validate(input) {
  
}

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
    const numberArray = e.target.value.split('');
    // Going through numbers typed in input box.
    // if character cannot be parsed as a number, then we want to add an error.
    for (let i = 0; i < numberArray.length; i++) {
      if (!parseInt(numberArray[i])) {
        labelCardNumber.children[0].classList.add('error');
        labelCardNumber.children[1].classList.remove('hide');
      } else {
        if (labelCardNumber.children[0].classList.contains('error')) {
          labelCardNumber.children[0].classList.remove('error');
          labelCardNumber.children[1].classList.add('hide');
        }
      }
    }
  });
});