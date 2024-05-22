import { Link } from 'react-router-dom';
import { type MenuItemType } from './Types';

type Props = {
  menuItem: MenuItemType;
};

export function MenuItem({ menuItem }: Props) {
  return (
    <li key={menuItem.name} className="inline-block py-2 px-4">
      <Link to={menuItem.path} className="text-white">
        {menuItem.name}
      </Link>
    </li>
  );
}
