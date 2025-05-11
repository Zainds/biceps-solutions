import { Outlet, Link } from 'react-router-dom';
import { Dumbbell } from 'lucide-react';

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-muted flex flex-col">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6">
        <Link to="/" className="flex items-center space-x-2">
          <Dumbbell size={28} className="text-primary" />
          <span className="text-lg font-bold">Biceps Solutions</span>
        </Link>
      </div>
      <div className="flex flex-grow items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 bg-background p-8 rounded-lg shadow-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;