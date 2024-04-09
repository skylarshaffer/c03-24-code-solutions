'use strict';
let clickCount = 0;
const $hotButton = document.querySelector('.hot-button');
console.log('.hot-button', $hotButton);
console.dir($hotButton);
const $clickCount = document.querySelector('.click-count');
console.log('.click-count', $clickCount);
console.dir($clickCount);
if (!$hotButton) throw new Error('The $hotButton query failed');
function handleClick() {
  clickCount++;
  if (!$hotButton || !$clickCount) {
    throw new Error('The $hotButton or $clickCount query failed');
  }
  $clickCount.textContent = `Clicks: ${clickCount}`;
  if (clickCount < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (clickCount < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (clickCount < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (clickCount < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (clickCount < 16) {
    $hotButton.className = 'hot-button hot';
  } else if (clickCount >= 16) {
    $hotButton.className = 'hot-button nuclear';
  }
}
$hotButton.addEventListener('click', handleClick);
