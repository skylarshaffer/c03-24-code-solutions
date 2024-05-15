import { useState } from 'react';
import './Toggle.css';

export function Toggle() {
  const [switchState, setSwitchState] = useState(false);

  function handleChange() {
    if (switchState) {
      setSwitchState(false);
    } else setSwitchState(true);
  }

  return (
    <>
      <label className={'toggle ' + (switchState ? 'on' : 'off')}>
        <input type="checkbox" onChange={handleChange} checked={switchState} />
        <span className="slider"></span>
      </label>
      <h2>{switchState ? 'ON' : 'OFF'}</h2>
    </>
  );
}
