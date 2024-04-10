'use strict';
//  Click Event
const $button = document.querySelector('button');
const $div = document.querySelector('div');
if (!$button) throw new Error('The $button query failed');
if (!$div) throw new Error('The $div query failed');
function handleClick(event) {
  console.log(event);
  if ($div?.className === 'night') {
    $div.className = 'day';
  } else if ($div?.className === 'day') {
    $div.className = 'night';
  }
}
$button.addEventListener('click', handleClick);
