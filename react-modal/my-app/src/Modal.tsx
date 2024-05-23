import { ReactNode, useEffect, useRef } from 'react';
import './App.css';

type Props = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export function Modal({ children, isOpen, onClose }: Props) {
  const modal = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    isOpen ? modal.current?.showModal() : modal.current?.close();
  }, [isOpen]);

  return (
    <>
      <dialog ref={modal} onClose={onClose}>
        {children}
      </dialog>
    </>
  );
}
