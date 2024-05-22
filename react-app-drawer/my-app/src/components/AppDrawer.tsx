import { Outlet } from 'react-router-dom';
import { MenuItem } from './MenuItem';
import { type MenuItemType } from './Types';

type Props = {
  menuItems: MenuItemType[];
};

export function AppDrawer({ menuItems }: Props) {
  return (
    <div className="flex flex-col w-screen">
      <nav className="inline-block py-2 px-4 bg-gray-900">
        <ul>
          {menuItems.map((menuItem) => (
            <MenuItem menuItem={menuItem} />
          ))}
        </ul>
      </nav>
      <div className="grow">
        <Outlet />
      </div>
    </div>
  );
}
