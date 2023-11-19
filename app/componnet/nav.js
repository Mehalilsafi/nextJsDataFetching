// components/Navbar.js

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-white flex justify-center w-full" >
           home
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
