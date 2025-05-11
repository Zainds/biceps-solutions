import { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Dumbbell, 
  User, 
  Calendar, 
  LayoutDashboard, 
  LogOut, 
  Menu, 
  X 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/ui/Button';

const DashboardLayout = () => {
  const { user, signOut, profile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { 
      name: 'Dashboard', 
      path: '/dashboard', 
      icon: <LayoutDashboard size={20} /> 
    },
    { 
      name: 'Profile', 
      path: '/dashboard/profile', 
      icon: <User size={20} /> 
    },
    { 
      name: 'My Bookings', 
      path: '/dashboard/bookings', 
      icon: <Calendar size={20} /> 
    },
  ];

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-muted flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden bg-background p-4 flex items-center justify-between shadow-sm">
        <Link to="/" className="flex items-center space-x-2">
          <Dumbbell size={24} className="text-primary" />
          <span className="text-lg font-bold">Biceps Solutions</span>
        </Link>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md hover:bg-muted"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-background border-r">
        <div className="p-6">
          <Link to="/" className="flex items-center space-x-2">
            <Dumbbell size={28} className="text-primary" />
            <span className="text-xl font-bold">Biceps Solutions</span>
          </Link>
        </div>
        
        <div className="flex-1 px-4 py-6">
          <div className="mb-8">
            <div className="px-4 py-2 bg-muted rounded-lg mb-4">
              <p className="text-sm text-muted-foreground">Welcome</p>
              <p className="font-medium truncate">
                {profile?.full_name || user?.email}
              </p>
            </div>
            
            <nav className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                    location.pathname === link.path 
                      ? 'bg-primary text-white' 
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <span className="mr-3">{link.icon}</span>
                  <span>{link.name}</span>
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="border-t pt-4">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-error hover:bg-error/10 hover:text-error"
              leftIcon={<LogOut size={20} />}
              onClick={handleSignOut}
            >
              Sign out
            </Button>
          </div>
        </div>
      </aside>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="md:hidden fixed inset-0 z-40 bg-background"
        >
          <div className="p-4 flex items-center justify-between border-b">
            <Link to="/" className="flex items-center space-x-2">
              <Dumbbell size={24} className="text-primary" />
              <span className="text-lg font-bold">Biceps Solutions</span>
            </Link>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-md hover:bg-muted"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="p-4">
            <div className="px-4 py-3 bg-muted rounded-lg mb-6">
              <p className="text-sm text-muted-foreground">Welcome</p>
              <p className="font-medium truncate">
                {profile?.full_name || user?.email}
              </p>
            </div>
            
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center px-4 py-3 rounded-md transition-colors ${
                    location.pathname === link.path 
                      ? 'bg-primary text-white' 
                      : 'text-foreground hover:bg-muted'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="mr-3">{link.icon}</span>
                  <span>{link.name}</span>
                </Link>
              ))}
              
              <button 
                className="flex items-center w-full px-4 py-3 rounded-md text-error hover:bg-error/10"
                onClick={handleSignOut}
              >
                <LogOut size={20} className="mr-3" />
                <span>Sign out</span>
              </button>
            </nav>
          </div>
        </motion.div>
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto px-4 py-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;