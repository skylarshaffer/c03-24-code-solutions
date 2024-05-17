import { useState } from 'react';
import { Banner } from './Banner';
import { Prev } from './Prev';
import { Numbers } from './Numbers';
import { Next } from './Next';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  const [current] = useState(3);
  return (
    <div className="container rotating-banner">
      <Banner current={current} items={items} />
      <Prev />
      <Numbers current={current} />
      <Next />
    </div>
  );
}
