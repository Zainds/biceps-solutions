import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Users, ChevronLeft, Calendar, Star, Award } from 'lucide-react';
import Button from '../components/ui/Button';

const ClassDetailPage = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState<string>('');

  // Sample class data (replace with actual data from your backend)
  const classData = {
    id: 1,
    name: 'Power HIIT',
    description: 'High-intensity interval training designed to burn maximum calories and build endurance. This class combines cardio and strength exercises in short, intense bursts followed by brief recovery periods.',
    image: 'https://images.pexels.com/photos/7530055/pexels-photo-7530055.jpeg',
    trainer: {
      name: 'Alex Johnson',
      image: 'https://images.pexels.com/photos/6456300/pexels-photo-6456300.jpeg',
      experience: '8+ years',
      specialties: ['HIIT', 'Strength Training', 'Weight Loss'],
      bio: 'NASM certified trainer specializing in high-intensity workouts and strength training.'
    },
    level: 'Intermediate',
    duration: 45,
    maxParticipants: 15,
    equipment: [
      'Dumbbells',
      'Kettlebells',
      'Jump rope',
      'Exercise mat'
    ],
    benefits: [
      'Improved cardiovascular fitness',
      'Increased strength and endurance',
      'Enhanced fat burning',
      'Better coordination and agility'
    ],
    schedule: [
      { day: 'Monday', time: '8:00 AM', available: 8 },
      { day: 'Wednesday', time: '8:00 AM', available: 5 },
      { day: 'Friday', time: '8:00 AM', available: 10 }
    ]
  };

  return (
    <div className="pt-16 md:pt-24">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px]">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: `url(${classData.image})` }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 h-full flex items-end relative z-20">
          <div className="pb-12">
            <Button
              variant="outline"
              size="sm"
              as={Link}
              to="/classes"
              leftIcon={<ChevronLeft size={16} />}
              className="mb-4 text-white border-white hover:bg-white/10"
            >
              Back to Classes
            </Button>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{classData.name}</h1>
              <div className="flex flex-wrap gap-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary text-white">
                  {classData.level}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white">
                  <Clock size={16} className="mr-1" />
                  {classData.duration} mins
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white">
                  <Users size={16} className="mr-1" />
                  Max {classData.maxParticipants} people
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Class Details */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">About This Class</h2>
                <p className="text-muted-foreground">{classData.description}</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {classData.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <Star size={20} className="text-primary flex-shrink-0 mt-1 mr-2" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Required Equipment</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {classData.equipment.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trainer Section */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Meet Your Trainer</h2>
                <div className="bg-muted rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={classData.trainer.image} 
                      alt={classData.trainer.name}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{classData.trainer.name}</h3>
                      <p className="text-muted-foreground mb-2">{classData.trainer.bio}</p>
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center text-sm">
                          <Award size={16} className="text-primary mr-1" />
                          {classData.trainer.experience}
                        </span>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {classData.trainer.specialties.map((specialty, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Booking */}
            <div>
              <div className="bg-background rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Book This Class</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Select Date & Time</label>
                    <select
                      className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                    >
                      <option value="">Choose a slot</option>
                      {classData.schedule.map((slot, index) => (
                        <option key={index} value={`${slot.day}-${slot.time}`}>
                          {slot.day} at {slot.time} ({slot.available} spots left)
                        </option>
                      ))}
                    </select>
                  </div>

                  <Button
                    variant="primary"
                    className="w-full"
                    leftIcon={<Calendar size={18} />}
                    disabled={!selectedDate}
                  >
                    Book Now
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Free cancellation up to 24 hours before class
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-medium mb-2">Important Information</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Please arrive 10 minutes before class starts</li>
                    <li>• Bring water and a towel</li>
                    <li>• Wear appropriate workout clothing</li>
                    <li>• Inform the trainer of any injuries</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClassDetailPage;