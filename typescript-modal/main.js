'use strict';
const $openModal = document.querySelector('.open-modal');
const $dismissModal = document.querySelector('.dismiss-modal');
const $dialog = document.querySelector('dialog');
if (!$openModal || !$dismissModal || !$dialog)
  throw new Error('The first query failed');
function handleClickOpen(event) {
  $dialog?.showModal();
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}
$openModal.addEventListener('click', handleClickOpen);
function handleClickDismiss(event) {
  $dialog?.close();
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}
$dismissModal.addEventListener('click', handleClickDismiss);
