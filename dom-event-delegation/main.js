'use strict';
//  Click Event
const $classTaskList = document.querySelector('.task-list');
if (!$classTaskList) throw new Error('The $classTaskList query failed');
function handleClick(event) {
  const eventTarget = event.target;
  console.log('eventTarget:', eventTarget);
  console.log('eventTarget.tagName:', eventTarget.tagName);
  if (eventTarget.tagName === 'BUTTON') {
    const parent = eventTarget.closest('.task-list-item');
    console.log(parent);
    if (!parent) throw new Error('The parent query failed');
    parent.remove();
  }
}
$classTaskList.addEventListener('click', handleClick);
