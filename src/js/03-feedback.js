import throttle from 'lodash.throttle'

const dataForm = document.querySelector('.feedback-form');
dataForm.addEventListener("submit", onFormSubmit);
dataForm.addEventListener("input", throttle(onClick, 500));


const KEY_NAME = 'feedback-form-state';
let formData = {};

getDate()

function onClick(evt) {
formData[evt.target.name] = evt.target.value; 
localStorage.setItem(KEY_NAME, JSON.stringify(formData))     
}

function getDate() {
    const saveDate = JSON.parse(localStorage.getItem(KEY_NAME)) ?? {};
    for (let key in saveDate) {
        dataForm.elements[key].value = saveDate[key]};    
    formData = saveDate;
};

function onFormSubmit(evt) {
    const element = evt.currentTarget.elements;
    if (element.email.value === '' || element.message.value === '') {
        return alert('Please fill out all the fields!');
    } else {
    evt.preventDefault();
    console.log(JSON.parse(localStorage.getItem(KEY_NAME)));
    localStorage.removeItem(KEY_NAME);
    evt.currentTarget.reset();
    }
};