const input = document.querySelector('#validation-input');

const inpLength = Number(input.dataset.length); 

input.addEventListener('blur', onBlur);
function onBlur(evt) {
  // const inpLength = Number(input.dataset.length); 
  
  if (Number(input.dataset.length) = Number(evt.currentTarget.value)) {
    input.classList.add('#validation-input.valid')
  } else {
    input.classList.remove('#validation-input.valid')
  };

}












