import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Clock, Dumbbell } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../../components/ui/Button';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import { formatDate } from '../../lib/utils';

const DashboardPage = () => {
  const { user, profile } = useAuth();
  const [upcomingBookings, setUpcomingBookings] = useState<any[]>([]);
  const [popularClasses, setPopularClasses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDashboardData() {
      setLoading(true);
      if (user) {
        try {
          // Get upcoming bookings for the user
          const { data: bookings, error: bookingsError } = await supabase
            .from('bookings')
            .select('*, classes(*)')
            .eq('user_id', user.id)
            .gte('booking_date', new Date().toISOString())
            .order('booking_date', { ascending: true })
            .limit(3);

          if (bookingsError) throw bookingsError;
          setUpcomingBookings(bookings || []);

          // Get popular classes
          const { data: classes, error: classesError } = await supabase
            .from('classes')
            .select('*, trainers(*)')
            .limit(4);

          if (classesError) throw classesError;
          setPopularClasses(classes || []);
        } catch (error) {
          console.error('Error fetching dashboard data:', error);
        } finally {
          setLoading(false);
        }
      }
    }

    fetchDashboardData();
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Dashboard</h1>
      
      {/* Membership Information */}
      <div className="bg-background rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Your Membership</h2>
        {profile?.memberships ? (
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
                {profile.memberships.name}
              </div>
              <p className="text-muted-foreground">{profile.memberships.description}</p>
            </div>
            <Button
              variant="outline"
              as={Link}
              to="/pricing"
              className="mt-4 md:mt-0"
            >
              Manage Membership
            </Button>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <p className="text-muted-foreground">
              You don't have an active membership plan.
            </p>
            <Button
              variant="primary"
              as={Link}
              to="/pricing"
              className="mt-4 md:mt-0"
            >
              View Plans
            </Button>
          </div>
        )}
      </div>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-background rounded-lg shadow-sm p-6 flex items-center">
          <div className="rounded-full bg-primary/10 p-3 mr-4">
            <Calendar size={24} className="text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Upcoming Sessions</p>
            <p className="text-2xl font-semibold">{upcomingBookings.length}</p>
          </div>
        </div>
        
        <div className="bg-background rounded-lg shadow-sm p-6 flex items-center">
          <div className="rounded-full bg-accent/10 p-3 mr-4">
            <Clock size={24} className="text-accent" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Hours Trained</p>
            <p className="text-2xl font-semibold">12.5</p>
          </div>
        </div>
        
        <div className="bg-background rounded-lg shadow-sm p-6 flex items-center">
          <div className="rounded-full bg-success/10 p-3 mr-4">
            <Dumbbell size={24} className="text-success" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Classes Attended</p>
            <p className="text-2xl font-semibold">8</p>
          </div>
        </div>
        
        <div className="bg-background rounded-lg shadow-sm p-6 flex items-center">
          <div className="rounded-full bg-primary/10 p-3 mr-4">
            <Users size={24} className="text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Community Rank</p>
            <p className="text-2xl font-semibold">Silver</p>
          </div>
        </div>
      </div>
      
      {/* Upcoming Bookings */}
      <div className="bg-background rounded-lg shadow-sm p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Upcoming Bookings</h2>
          <Button
            variant="outline"
            size="sm"
            as={Link}
            to="/dashboard/bookings"
          >
            View All
          </Button>
        </div>
        
        {upcomingBookings.length > 0 ? (
          <div className="space-y-4">
            {upcomingBookings.map((booking) => (
              <div 
                key={booking.id} 
                className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex-1">
                  <h3 className="font-medium">{booking.classes.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {formatDate(booking.booking_date)} · {booking.classes.duration} mins
                  </p>
                </div>
                <div className="flex items-center mt-4 md:mt-0">
                  <span 
                    className={`inline-block px-3 py-1 text-xs font-medium rounded-full 
                      ${booking.status === 'confirmed' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'}`}
                  >
                    {booking.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground mb-4">You don't have any upcoming bookings.</p>
            <Button
              variant="primary"
              as={Link}
              to="/classes"
            >
              Browse Classes
            </Button>
          </div>
        )}
      </div>
      
      {/* Recommended Classes */}
      <div className="bg-background rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Popular Classes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularClasses.map((classItem) => (
            <div 
              key={classItem.id} 
              className="border rounded-lg overflow-hidden"
            >
              <img 
                src={classItem.image_url} 
                alt={classItem.name} 
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium mb-1">{classItem.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  With {classItem.trainers.name}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                    {classItem.level}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {classItem.duration} mins
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;