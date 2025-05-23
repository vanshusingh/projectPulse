import { Github as GitHub, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 pt-12 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center">
                <span className="text-xs font-bold text-gray-950">PP</span>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
                ProjectPulse
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Empowering developers to connect, collaborate, and create amazing projects together.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
                aria-label="GitHub"
              >
                <GitHub className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h5 className="font-semibold text-gray-200 mb-4">Platform</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">
                  Project Ideas
                </Link>
              </li>
              <li>
                <Link to="/teams" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">
                  Find Teams
                </Link>
              </li>
              <li>
                <Link to="/code-room" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">
                  Live Collaboration
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">
                  User Profiles
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h5 className="font-semibold text-gray-200 mb-4">Resources</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">
                  Community
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h5 className="font-semibold text-gray-200 mb-4">Company</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © {currentYear} ProjectPulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;