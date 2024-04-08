//  Click Event
const $classClickButton = document.querySelector('.click-button');

if (!$classClickButton) throw new Error('The $classClickButton query failed');

function handleClick(event: Event): void {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

$classClickButton.addEventListener('click', handleClick);

//  Mouseover Event
const $classHoverButton = document.querySelector('.hover-button');

if (!$classHoverButton) throw new Error('The $classHoverButton query failed');

function handleMouseover(event: Event): void {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

$classHoverButton.addEventListener('mouseover', handleMouseover);

//  Double-click Event
const $classDoubleClickButton = document.querySelector('.double-click-button');

if (!$classDoubleClickButton)
  throw new Error('The $classDoubleClickButton query failed');

function handleDoubleClick(event: Event): void {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

$classDoubleClickButton.addEventListener('dblclick', handleDoubleClick);
