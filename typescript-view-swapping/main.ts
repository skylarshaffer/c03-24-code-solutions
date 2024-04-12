const $tabContainer = document.querySelector('.tab-container') as HTMLElement;
const $tab = document.querySelectorAll('.tab') as NodeListOf<HTMLElement>;
const $view = document.querySelectorAll('.view') as NodeListOf<HTMLElement>;

if (!$tabContainer || !$tab || !$view)
  throw new Error('One of the DOM queries failed');

//  on click in tab container
function handleClick(event: Event): void {
  //  set 'variable' to 'clicked element'
  const $eventTarget = event.target as HTMLDivElement;
  console.log('eventTarget', $eventTarget);
  //  if 'element clicked' is of class 'tab'
  if ($eventTarget.matches('.tab')) {
    console.log('Tab clicked (target matches tab selector).');
    //  for each 'element' of class 'tab'
    for (let i = 0; i < $tab.length; i++) {
      //  if 'element' equals 'clicked element'
      if ($tab[i] === $eventTarget) {
        //  add 'active' to 'class'
        $tab[i].classList.add('active');
      }
      //  all other elements
      else {
        //  remove 'active' from 'class'
        $tab[i].classList.remove('active');
      }
    }
    //  set 'variable' to 'value of data-view attribute of clicked element'
    const $eventTargetDataView = $eventTarget.getAttribute('data-view');
    //  for each 'element' of class 'view'
    for (let i = 0; i < $view.length; i++) {
      //  if 'element data-view' equals 'clicked element data-view'
      if ($view[i].dataset.view === $eventTargetDataView) {
        //  remove 'hidden' from 'class'
        $view[i].classList.remove('hidden');
      }
      //  all other elements
      else {
        //  add 'hidden' to 'class'
        $view[i].classList.add('hidden');
      }
    }
  }
}

//  set 'click' listener on 'tab' container
$tabContainer.addEventListener('click', handleClick);
