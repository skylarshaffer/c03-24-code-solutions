import { ReactNode, RefObject } from 'react';
import './App.css';
import { createPortal } from 'react-dom';

type Props = {
  children: ReactNode;
  isOpen: boolean;
  positionTo: RefObject<HTMLButtonElement>;
  onPopupClick: () => void;
  opacity: number;
};

export function Popup({
  children,
  isOpen,
  positionTo,
  onPopupClick,
  opacity,
}: Props) {
  const buttonRectangle = positionTo.current?.getBoundingClientRect();
  if (!isOpen) return null;
  return createPortal(
    <div
      onClick={onPopupClick}
      style={{
        position: 'fixed',
        top: '0',
        width: '100vw',
        height: '100vh',
        backgroundColor: `rgba(0, 0, 0, ${opacity})`,
        cursor: 'pointer',
      }}>
      <div
        style={{
          position: 'absolute',
          top: buttonRectangle
            ? buttonRectangle.top + buttonRectangle.height
            : '50%',
          left: buttonRectangle ? buttonRectangle.left : '50%',
        }}>
        <div className="menu-wrapper">{children}</div>,
      </div>
      ,
    </div>,
    document.body
  );
}
