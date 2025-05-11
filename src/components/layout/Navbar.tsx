import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dumbbell, Menu, X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import { useAuth } from '../../contexts/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Главная', path: '/' },
    { name: 'О нас', path: '/about' },
    { name: 'Занятия', path: '/classes' },
    { name: 'Абонементы', path: '/pricing' },
    { name: 'Тренеры', path: '/trainers' },
    { name: 'Контакты', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background shadow-md">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Dumbbell size={32} className="text-primary" />
            <span className="text-xl font-bold">Biceps Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors duration-300 hover:text-primary ${
                    location.pathname === link.path ? 'font-semibold' : 'font-medium'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              {user ? (
                <Button 
                  variant="primary" 
                  size="sm"
                  as={Link}
                  to="/dashboard"
                  leftIcon={<User size={16} />}
                >
                  Личный кабинет
                </Button>
              ) : (
                <>
                  <Button 
                    variant="outline" 
                    size="sm"
                    as={Link}
                    to="/auth/login"
                  >
                    Войти
                  </Button>
                  <Button 
                    variant="primary" 
                    size="sm"
                    as={Link}
                    to="/auth/register"
                  >
                    Регистрация
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-t"
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-2 hover:text-primary ${
                    location.pathname === link.path ? 'font-semibold' : 'font-medium'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                {user ? (
                  <Button 
                    variant="primary" 
                    size="sm"
                    as={Link}
                    to="/dashboard"
                    leftIcon={<User size={16} />}
                    className="w-full"
                  >
                    Личный кабинет
                  </Button>
                ) : (
                  <>
                    <Button 
                      variant="outline" 
                      size="sm"
                      as={Link}
                      to="/auth/login"
                      className="w-full"
                    >
                      Войти
                    </Button>
                    <Button 
                      variant="primary" 
                      size="sm"
                      as={Link}
                      to="/auth/register"
                      className="w-full"
                    >
                      Регистрация
                    </Button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;