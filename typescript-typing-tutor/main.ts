let $current = document.querySelector('.current') as HTMLElement;
let $next = document.querySelector('span:not([class])') as HTMLElement;
if (!$current) throw new Error('The $current query failed');
if (!$next) throw new Error('The $next query failed');

function handleKeyDown(event: KeyboardEvent): void {
  if (event.key !== $current?.textContent) {
    $current.className = 'current wrong';
  } else if (event.key === $current.textContent) {
    $current.className = 'right';
    if (!$next) {
      $current = document.querySelector('html') as HTMLElement;
    } else {
      $next.className = 'current';
      $current = $next;
      $next = document.querySelector('span:not([class])') as HTMLElement;
    }
  }
}

document.addEventListener('keydown', handleKeyDown);
