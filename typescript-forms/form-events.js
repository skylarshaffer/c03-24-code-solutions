'use strict';
//  Dom queries
const $userName = document.querySelector('#user-name');
const $userEmail = document.querySelector('#user-email');
const $userMessage = document.querySelector('#user-message');
//  Error coverage
if (!$userName || !$userEmail || !$userMessage)
  throw new Error('One of the DOM queries failed');
//  Callback Functions
function handleFocus(event) {
  console.log(`'focus' event was fired`);
  const eventTarget = event.target;
  console.log(`value of ${eventTarget.name}:`, eventTarget.value);
}
function handleBlur(event) {
  console.log(`'blur' event was fired`);
  const eventTarget = event.target;
  console.log(`value of ${eventTarget.name}:`, eventTarget.value);
}
function handleInput(event) {
  const eventTarget = event.target;
  console.log(`value of ${eventTarget.name}:`, eventTarget.value);
}
//  handleFocus
$userName.addEventListener('focus', handleFocus);
$userEmail.addEventListener('focus', handleFocus);
$userMessage.addEventListener('focus', handleFocus);
//  handleBlur
$userName.addEventListener('blur', handleBlur);
$userEmail.addEventListener('blur', handleBlur);
$userMessage.addEventListener('blur', handleBlur);
//  handleInput
$userName.addEventListener('input', handleInput);
$userEmail.addEventListener('input', handleInput);
$userMessage.addEventListener('input', handleInput);
