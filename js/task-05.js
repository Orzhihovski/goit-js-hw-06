// const input = document.querySelector('#name-input');
// const span = document.querySelector('#name-output');
// input.addEventListener('input', onName);
// function onName(evt) {
   
//     span.textContent =  evt.currentTarget.value
// };


const rews = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output')
};

rews.input.addEventListener('input', onChangeName);
function onChangeName(evt) {
    rews.span.textContent = evt.currentTarget.value
}