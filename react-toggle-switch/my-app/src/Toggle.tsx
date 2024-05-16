import { useState } from 'react';
import './Toggle.css';

export function Toggle() {
  const [switchState, setSwitchState] = useState(false);

  return (
    <>
      <label className={'toggle ' + (switchState ? 'on' : 'off')}>
        <input
          type="checkbox"
          onChange={() => setSwitchState(!switchState)}
          checked={switchState}
        />
        <span className="slider" />
      </label>
      <h2>{switchState ? 'ON' : 'OFF'}</h2>
    </>
  );
}
