import React, { useState } from 'react';
import { Banner } from './Banner';
import { Prev } from './Prev';
import { Numbers } from './Numbers';
import { Next } from './Next';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  const [current, setCurrent] = useState(0);

  function handleNumberClick(event: React.MouseEvent<HTMLButtonElement>) {
    const eventTarget = event.target as HTMLButtonElement;
    setCurrent(Number(eventTarget.id));
  }

  return (
    <div className="container rotating-banner">
      <Banner current={current} items={items} />
      <Prev
        onPrevClick={() => {
          setCurrent((items.length - 1 + current) % items.length);
        }}
      />
      <Numbers
        current={current}
        onNumberClick={handleNumberClick}
        items={items}
      />
      <Next
        onNextClick={() => {
          setCurrent((items.length + 1 + current) % items.length);
        }}
      />
    </div>
  );
}
