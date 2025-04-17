import Link from 'next/link';
import { FiSearch, FiUser } from 'react-icons/fi';
import { useState } from 'react';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="fixed top-0 left-0 right-0 bg-secondary/95 backdrop-blur-sm z-50 border-b border-gray-700">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-bold text-primary">
          AniWebs
        </Link>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search anime..."
              className="bg-gray-800 text-white px-4 py-2 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/popular" className="hover:text-primary transition-colors">
              Popular
            </Link>
            <Link href="/genres" className="hover:text-primary transition-colors">
              Genres
            </Link>
            <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
              <FiUser className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 