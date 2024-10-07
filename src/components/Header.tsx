import React from 'react';
import { Heart } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const navItems = ['home', 'speciality', 'doctors', 'reviews', 'about', 'contact'];

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Heart size={32} className="mr-2" />
          <h1 className="text-2xl font-bold">AITK Hospital</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => setCurrentPage(item)}
                  className={`capitalize ${
                    currentPage === item ? 'font-bold' : ''
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;