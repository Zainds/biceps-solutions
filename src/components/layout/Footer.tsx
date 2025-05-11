import { Link } from 'react-router-dom';
import { Dumbbell, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Dumbbell size={32} />
              <span className="text-xl font-bold">Biceps Solutions</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Transforming lives through fitness and wellness. Join our community today and begin your journey to a healthier lifestyle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/classes" className="text-gray-400 hover:text-white transition duration-300">Classes</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white transition duration-300">Membership</Link>
              </li>
              <li>
                <Link to="/trainers" className="text-gray-400 hover:text-white transition duration-300">Trainers</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Classes */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Classes</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/classes" className="text-gray-400 hover:text-white transition duration-300">
                  Strength Training
                </Link>
              </li>
              <li>
                <Link to="/classes" className="text-gray-400 hover:text-white transition duration-300">
                  Cardio Fitness
                </Link>
              </li>
              <li>
                <Link to="/classes" className="text-gray-400 hover:text-white transition duration-300">
                  Yoga & Pilates
                </Link>
              </li>
              <li>
                <Link to="/classes" className="text-gray-400 hover:text-white transition duration-300">
                  HIIT Workouts
                </Link>
              </li>
              <li>
                <Link to="/classes" className="text-gray-400 hover:text-white transition duration-300">
                  Group Training
                </Link>
              </li>
              <li>
                <Link to="/classes" className="text-gray-400 hover:text-white transition duration-300">
                  Personal Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                <span className="text-gray-400">123 Fitness Ave, Workout City, WC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <span className="text-gray-400">(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <span className="text-gray-400">info@bicepssolutions.com</span>
              </div>
              <div>
                <h4 className="font-medium mb-2">Working Hours</h4>
                <p className="text-gray-400">Monday - Friday: 6:00 AM - 10:00 PM</p>
                <p className="text-gray-400">Saturday - Sunday: 8:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Biceps Solutions. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;