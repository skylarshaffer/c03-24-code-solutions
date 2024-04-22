const $h1 = document.querySelector('h1') as HTMLHeadingElement;
setTimeout(() => {
  $h1.textContent = 'Hello There';
}, 2000);
