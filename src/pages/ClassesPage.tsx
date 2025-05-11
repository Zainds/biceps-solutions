import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Filter, Clock, Users, ChevronRight } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const ClassesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<number | null>(null);

  // Sample classes data (replace with actual data from your backend)
  const classes = [
    {
      id: 1,
      name: 'Power HIIT',
      description: 'High-intensity interval training designed to burn maximum calories and build endurance.',
      image: 'https://images.pexels.com/photos/7530055/pexels-photo-7530055.jpeg',
      trainer: 'Alex Johnson',
      level: 'Intermediate',
      duration: 45,
      maxParticipants: 15,
      schedule: 'Mon, Wed, Fri - 8:00 AM'
    },
    {
      id: 2,
      name: 'Yoga Flow',
      description: 'Gentle yet effective yoga sequence focusing on flexibility, balance, and mindfulness.',
      image: 'https://images.pexels.com/photos/4056478/pexels-photo-4056478.jpeg',
      trainer: 'Sarah Williams',
      level: 'All Levels',
      duration: 60,
      maxParticipants: 20,
      schedule: 'Tue, Thu - 9:00 AM'
    },
    {
      id: 3,
      name: 'Strength Foundations',
      description: 'Learn proper lifting techniques and build full-body strength with compound movements.',
      image: 'https://images.pexels.com/photos/4164512/pexels-photo-4164512.jpeg',
      trainer: 'Marcus Chen',
      level: 'Beginner',
      duration: 50,
      maxParticipants: 12,
      schedule: 'Mon, Wed, Fri - 10:00 AM'
    },
    {
      id: 4,
      name: 'Cardio Blast',
      description: 'High-energy cardio workout combining various exercises for maximum calorie burn.',
      image: 'https://images.pexels.com/photos/4498294/pexels-photo-4498294.jpeg',
      trainer: 'Emily Rodriguez',
      level: 'Intermediate',
      duration: 45,
      maxParticipants: 18,
      schedule: 'Tue, Thu - 6:00 PM'
    },
    {
      id: 5,
      name: 'Core & More',
      description: 'Focus on building core strength and stability through targeted exercises.',
      image: 'https://images.pexels.com/photos/6456300/pexels-photo-6456300.jpeg',
      trainer: 'Mike Thompson',
      level: 'All Levels',
      duration: 30,
      maxParticipants: 15,
      schedule: 'Mon, Wed, Fri - 12:00 PM'
    },
    {
      id: 6,
      name: 'Advanced CrossFit',
      description: 'Challenging workout combining strength training and high-intensity cardio.',
      image: 'https://images.pexels.com/photos/6456151/pexels-photo-6456151.jpeg',
      trainer: 'Chris Parker',
      level: 'Advanced',
      duration: 60,
      maxParticipants: 10,
      schedule: 'Tue, Thu, Sat - 7:00 AM'
    }
  ];

  const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];
  const durations = [30, 45, 60];

  const filteredClasses = classes.filter(cls => {
    const matchesSearch = cls.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cls.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cls.trainer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLevel = !selectedLevel || cls.level === selectedLevel;
    const matchesDuration = !selectedDuration || cls.duration === selectedDuration;

    return matchesSearch && matchesLevel && matchesDuration;
  });

  return (
    <div className="pt-16 md:pt-24">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1920')" 
          }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Classes</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Discover our wide range of fitness classes designed to help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Search classes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                leftIcon={<Search size={18} />}
              />
            </div>
            <div className="flex gap-4">
              <div className="w-40">
                <select
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  value={selectedLevel || ''}
                  onChange={(e) => setSelectedLevel(e.target.value || null)}
                >
                  <option value="">All Levels</option>
                  {levels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
              <div className="w-40">
                <select
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  value={selectedDuration || ''}
                  onChange={(e) => setSelectedDuration(Number(e.target.value) || null)}
                >
                  <option value="">All Durations</option>
                  {durations.map(duration => (
                    <option key={duration} value={duration}>{duration} mins</option>
                  ))}
                </select>
              </div>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedLevel(null);
                  setSelectedDuration(null);
                }}
              >
                Reset
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClasses.map((cls) => (
              <motion.div
                key={cls.id}
                whileHover={{ y: -10 }}
                className="bg-background rounded-lg overflow-hidden shadow-md"
              >
                <div className="relative h-48">
                  <img 
                    src={cls.image} 
                    alt={cls.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/50 text-white rounded-full text-sm">
                      {cls.level}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{cls.name}</h3>
                  <p className="text-muted-foreground mb-4">{cls.description}</p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock size={16} className="mr-1" />
                      {cls.duration} mins
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users size={16} className="mr-1" />
                      Max {cls.maxParticipants}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Instructor</p>
                      <p className="text-sm text-muted-foreground">{cls.trainer}</p>
                    </div>
                    <Button
                      variant="primary"
                      size="sm"
                      as={Link}
                      to={`/classes/${cls.id}`}
                      rightIcon={<ChevronRight size={16} />}
                    >
                      Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClassesPage;