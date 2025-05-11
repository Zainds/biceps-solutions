import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted">
      <div className="text-center max-w-md p-6">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button 
          variant="primary" 
          as={Link} 
          to="/"
          leftIcon={<ArrowLeft size={18} />}
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;