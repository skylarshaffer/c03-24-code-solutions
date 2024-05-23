import { useState } from 'react';
import { Modal } from './Modal';
import './App.css';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const children = (
    <>
      Do you really want to delete?
      <button onClick={() => setIsOpen(false)}>Cancel</button>
      <button
        onClick={() => {
          alert('Something was deleted');
          setIsOpen(false);
        }}>
        Delete
      </button>
    </>
  );
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Delete Me!</button>
      <Modal
        isOpen={isOpen}
        children={children}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
