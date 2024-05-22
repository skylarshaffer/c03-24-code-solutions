import { Outlet, Link } from 'react-router-dom';

export function Header() {
  return (
    <>
      <nav className="text-white bg-gray-900">
        <ul className="">
          <li className="inline-block py-2 px-4">
            <Link to="about" className="text-white font-normal">
              About
            </Link>
          </li>
          <li className="inline-block py-2 px-4">
            <Link to="/" className="text-white font-normal">
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
      {/* Page content goes here */}
      <Outlet />
    </>
  );
}
