import { read } from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = (): string =>
  `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function throwOnce(): Promise<void> {
  const msg = await read('foo', true);
  console.log(elapsed(), 'throwOnce:', msg);
}

async function throwSeveral(): Promise<void> {
  let msg = await read('foo1', true);
  console.log(elapsed(), 'throwSeveral1:', msg);
  msg = await read('foo2', true);
  console.log(elapsed(), 'throwSeveral2:', msg);
  msg = await read('foo3', true);
  console.log(elapsed(), 'throwSeveral3:', msg);
}

async function throwChained(): Promise<void> {
  const msg1 = await read('foo-chain', true);
  console.log(elapsed(), 'throwChained1:', msg1);
  const msg2 = await read(msg1, false);
  console.log(elapsed(), 'throwChained2:', msg2);
  const msg3 = await read(msg2, true);
  console.log(elapsed(), 'throwChained3:', msg3);
}

try {
  await throwOnce();
  await throwSeveral();
  await throwChained();
} catch (error) {
  console.log(elapsed(), 'throwAll Error:', error);
}
