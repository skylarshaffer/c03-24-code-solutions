import { Link, Outlet } from 'react-router-dom';

export type MenuItem = {
  name: string;
  iconUrl: string;
  path: string;
};

type Props = {
  menuItems: MenuItem[];
};
export function AppDrawer({ menuItems }: Props) {
  return (
    <div className="flex flex-col w-screen">
      <nav className="inline-block py-2 px-4 bg-gray-900">
        <ul>
          {menuItems.map((menu) => (
            <li key={menu.name} className="inline-block py-2 px-4">
              <Link to={menu.path} className="text-white">
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="grow">
        <Outlet />
      </div>
    </div>
  );
}
