'use strict';
let $current = document.querySelector('.current');
let $next = document.querySelector('span:not([class])');
if (!$current) throw new Error('The $current query failed');
if (!$next) throw new Error('The $next query failed');
function handleKeyDown(event) {
  if (event.key !== $current?.textContent) {
    $current.className = 'current wrong';
  } else if (event.key === $current.textContent) {
    $current.className = 'right';
    if (!$next) {
      $current = document.querySelector('html');
    } else {
      $next.className = 'current';
      $current = $next;
      $next = document.querySelector('span:not([class])');
    }
  }
}
document.addEventListener('keydown', handleKeyDown);
