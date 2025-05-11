import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Trash2, RefreshCw } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../../components/ui/Button';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import { formatDate } from '../../lib/utils';
import { toast } from 'sonner';

const BookingsPage = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  useEffect(() => {
    if (user) {
      fetchBookings();
    }
  }, [user, activeTab]);

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const now = new Date().toISOString();
      const query = supabase
        .from('bookings')
        .select('*, classes(*)')
        .eq('user_id', user?.id)
        .order('booking_date', { ascending: activeTab === 'upcoming' });

      if (activeTab === 'upcoming') {
        query.gte('booking_date', now);
      } else {
        query.lt('booking_date', now);
      }

      const { data, error } = await query;

      if (error) throw error;
      setBookings(data || []);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelBooking = async (bookingId: number) => {
    try {
      const { error } = await supabase
        .from('bookings')
        .delete()
        .eq('id', bookingId);

      if (error) throw error;

      setBookings(bookings.filter(booking => booking.id !== bookingId));
      toast.success('Booking cancelled successfully');
    } catch (error) {
      console.error('Error cancelling booking:', error);
      toast.error('Failed to cancel booking');
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">My Bookings</h1>
        <div className="mt-4 md:mt-0">
          <Button
            variant="outline"
            size="sm"
            as={Link}
            to="/classes"
          >
            Browse Classes
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 mb-6">
        <button
          className={`px-4 py-2 rounded-md font-medium ${
            activeTab === 'upcoming'
              ? 'bg-primary text-white'
              : 'bg-muted hover:bg-muted'
          }`}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming
        </button>
        <button
          className={`px-4 py-2 rounded-md font-medium ${
            activeTab === 'past'
              ? 'bg-primary text-white'
              : 'bg-muted hover:bg-muted'
          }`}
          onClick={() => setActiveTab('past')}
        >
          Past
        </button>
      </div>

      {/* Bookings List */}
      <div className="bg-background rounded-lg shadow-sm">
        {loading ? (
          <div className="flex justify-center py-12">
            <LoadingSpinner size="lg" />
          </div>
        ) : bookings.length > 0 ? (
          <div className="divide-y">
            {bookings.map((booking) => (
              <div key={booking.id} className="p-6">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="flex-1">
                    <div className="flex items-start">
                      <div className="mr-4 p-2 bg-primary/10 rounded-full">
                        <Calendar size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{booking.classes.name}</h3>
                        <p className="text-muted-foreground">
                          {formatDate(booking.booking_date)}
                        </p>
                        <div className="mt-2 flex items-center">
                          <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full 
                            ${booking.status === 'confirmed' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'}`}
                          >
                            {booking.status}
                          </span>
                          <span className="ml-3 text-sm text-muted-foreground">
                            {booking.classes.duration} minutes
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {activeTab === 'upcoming' && (
                    <div className="mt-4 md:mt-0 flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        leftIcon={<RefreshCw size={16} />}
                      >
                        Reschedule
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        leftIcon={<Trash2 size={16} />}
                        className="text-error hover:bg-error/10 hover:text-error"
                        onClick={() => handleCancelBooking(booking.id)}
                      >
                        Cancel
                      </Button>
                    </div>
                  )}
                </div>
                
                <div className="mt-4 md:ml-12">
                  <p className="text-sm">
                    {booking.classes.description}
                  </p>
                  <div className="mt-2 text-primary hover:underline">
                    <Link to={`/classes/${booking.classes.id}`}>View Class Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">
              {activeTab === 'upcoming'
                ? "You don't have any upcoming bookings."
                : "You don't have any past bookings."}
            </p>
            {activeTab === 'upcoming' && (
              <Button
                variant="primary"
                as={Link}
                to="/classes"
              >
                Book a Class
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingsPage;