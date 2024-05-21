import { Outlet, Link } from 'react-router-dom';

export function Header() {
  return (
    <div>
      <nav className="px-4 text-white bg-gray-900">
        <ul>
          <li className="inline-block py-2 px-4">
            <Link to="about" className="text-white">
              About
            </Link>
          </li>
          <li className="inline-block py-2 px-4">
            <Link to="/" className="text-white">
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
      {/* Page content goes here */}
      <Outlet />
    </div>
  );
}
