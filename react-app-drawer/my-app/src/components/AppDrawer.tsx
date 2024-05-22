import { Outlet } from 'react-router-dom';
import { MenuItem } from './MenuItem';
import { type MenuItemType } from './Types';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

type Props = {
  menuItems: MenuItemType[];
};

export function AppDrawer({ menuItems }: Props) {
  const [drawerOpen, setDrawerOpen] = useState(true);

  function handleBurgerClick() {
    setDrawerOpen(!drawerOpen);
  }
  return (
    <>
      <nav
        className={
          (drawerOpen ? 'is-open ' : '') +
          'inline-block py-2 bg-gray-900 menu-drawer'
        }>
        <FaBars onClick={handleBurgerClick} className="menu-icon" />
        <h2
          style={{ display: drawerOpen ? '' : 'none' }}
          className="menu-heading">
          Hylian Shopping
        </h2>
        <ul className="menu-items">
          {menuItems.map((menuItem) => (
            <MenuItem key={menuItem.path} menuItem={menuItem} />
          ))}
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export function Foo() {
  return <FaBars />;
}
