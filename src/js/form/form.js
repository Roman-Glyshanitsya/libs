import { saveFormData } from './form-data';
import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const message = formElements.message.value;

  const formData = { mail, message };

  saveFormData(formData);

  alert({
    text: 'Feedback successfully submitted!',
    type: 'success',
  });
}
