'use strict';
//  Dom queries
const $contactForm = document.querySelector('#contact-form');
//  Error coverage
if (!$contactForm) throw new Error('The $contactForm query failed');
//  Callback Functions
function handleSubmit(event) {
  event.preventDefault();
  const $formElements = $contactForm.elements;
  const formSubmission = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log(formSubmission);
}
//  handleSubmit
$contactForm.addEventListener('submit', handleSubmit);
