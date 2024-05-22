import { Link } from 'react-router-dom';
import { type MenuItemType } from './Types';

type Props = {
  menuItem: MenuItemType;
};

export function MenuItem({ menuItem }: Props) {
  return (
    <li key={menuItem.name} className="py-2 px-4 menu-item">
      <Link to={menuItem.path} className="text-white menu-link">
        <img className="item-icon" src={menuItem.iconUrl} alt={menuItem.name} />
        <span>{menuItem.name}</span>
      </Link>
    </li>
  );
}
