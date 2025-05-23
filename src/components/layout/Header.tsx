import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Code, Users, Puzzle as PuzzlePiece, User } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useClerk, useUser, SignInButton, UserButton } from '@clerk/clerk-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();
  const { user, isSignedIn } = useUser();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-primary-500 font-semibold' : 'text-gray-300 hover:text-primary-400';
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-950/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center">
            <Code className="h-5 w-5 text-gray-950" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
            ProjectPulse
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`${isActive('/')} transition-colors duration-200`}>Home</Link>
          <Link to="/projects" className={`${isActive('/projects')} transition-colors duration-200`}>Projects</Link>
          <Link to="/teams" className={`${isActive('/teams')} transition-colors duration-200`}>Teams</Link>
          <Link to="/code-room" className={`${isActive('/code-room')} transition-colors duration-200`}>Code Room</Link>
          {isSignedIn && (
            <Link to="/profile" className={`${isActive('/profile')} transition-colors duration-200`}>Profile</Link>
          )}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-300" />}
          </button>
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <SignInButton mode="modal">
              <button className="btn btn-primary">Sign In</button>
            </SignInButton>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-4">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-300" />}
          </button>
          <button 
            onClick={toggleMenu} 
            className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-gray-950/95 z-40 flex flex-col pt-20 px-6 transition-all duration-300 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <nav className="flex flex-col space-y-6 text-lg">
          <Link 
            to="/" 
            className="flex items-center space-x-3 py-2 border-b border-gray-800"
            onClick={closeMenu}
          >
            <PuzzlePiece className="h-5 w-5 text-primary-500" />
            <span className={isActive('/')}>Home</span>
          </Link>
          <Link 
            to="/projects" 
            className="flex items-center space-x-3 py-2 border-b border-gray-800"
            onClick={closeMenu}
          >
            <PuzzlePiece className="h-5 w-5 text-primary-500" />
            <span className={isActive('/projects')}>Projects</span>
          </Link>
          <Link 
            to="/teams" 
            className="flex items-center space-x-3 py-2 border-b border-gray-800"
            onClick={closeMenu}
          >
            <Users className="h-5 w-5 text-primary-500" />
            <span className={isActive('/teams')}>Teams</span>
          </Link>
          <Link 
            to="/code-room" 
            className="flex items-center space-x-3 py-2 border-b border-gray-800"
            onClick={closeMenu}
          >
            <Code className="h-5 w-5 text-primary-500" />
            <span className={isActive('/code-room')}>Code Room</span>
          </Link>
          {isSignedIn && (
            <Link 
              to="/profile" 
              className="flex items-center space-x-3 py-2 border-b border-gray-800"
              onClick={closeMenu}
            >
              <User className="h-5 w-5 text-primary-500" />
              <span className={isActive('/profile')}>Profile</span>
            </Link>
          )}
        </nav>
        <div className="mt-8">
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <SignInButton mode="modal">
              <button className="btn btn-primary w-full">Sign In</button>
            </SignInButton>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;