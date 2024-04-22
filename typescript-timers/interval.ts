const $intervalH1 = document.querySelector('h1') as HTMLHeadingElement;
let i = 3;
const intervalId = setInterval(() => {
  if (i > 0) {
    $intervalH1.textContent = `${i}`;
    i--;
  } else {
    $intervalH1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  }
}, 1000);
