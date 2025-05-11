import { motion } from 'framer-motion';
import { Award, Instagram, Facebook, Twitter } from 'lucide-react';

const TrainersPage = () => {
  // Sample trainers data (replace with actual data from your backend)
  const trainers = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Head Trainer',
      image: 'https://images.pexels.com/photos/6456300/pexels-photo-6456300.jpeg',
      bio: 'NASM certified trainer specializing in strength training and HIIT workouts.',
      experience: '8+ years',
      specialties: ['Strength Training', 'HIIT', 'Weight Loss'],
      certifications: ['NASM CPT', 'CrossFit Level 2', 'TRX Certified'],
      social: {
        instagram: '#',
        facebook: '#',
        twitter: '#'
      }
    },
    {
      id: 2,
      name: 'Sarah Williams',
      role: 'Fitness Specialist',
      image: 'https://images.pexels.com/photos/5327533/pexels-photo-5327533.jpeg',
      bio: 'Former Olympic athlete with expertise in sports conditioning and rehabilitation.',
      experience: '12+ years',
      specialties: ['Sports Conditioning', 'Rehabilitation', 'Functional Training'],
      certifications: ['NSCA CSCS', 'NASM PES', 'ACE CPT'],
      social: {
        instagram: '#',
        facebook: '#',
        twitter: '#'
      }
    },
    {
      id: 3,
      name: 'Marcus Chen',
      role: 'Yoga Instructor',
      image: 'https://images.pexels.com/photos/4058411/pexels-photo-4058411.jpeg',
      bio: 'Yoga instructor and mobility specialist focusing on flexibility and mind-body connection.',
      experience: '6+ years',
      specialties: ['Yoga', 'Mobility', 'Meditation'],
      certifications: ['RYT 500', 'FRC Mobility Specialist', 'Mindfulness Coach'],
      social: {
        instagram: '#',
        facebook: '#',
        twitter: '#'
      }
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      role: 'Group Fitness Instructor',
      image: 'https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg',
      bio: 'High-energy group fitness instructor specializing in cardio and dance-based workouts.',
      experience: '5+ years',
      specialties: ['Zumba', 'HIIT', 'Dance Fitness'],
      certifications: ['ACE Group Fitness', 'Zumba Licensed', 'Les Mills'],
      social: {
        instagram: '#',
        facebook: '#',
        twitter: '#'
      }
    },
    {
      id: 5,
      name: 'Mike Thompson',
      role: 'Performance Coach',
      image: 'https://images.pexels.com/photos/4398889/pexels-photo-4398889.jpeg',
      bio: 'Sports performance specialist with focus on athletic development and injury prevention.',
      experience: '10+ years',
      specialties: ['Athletic Performance', 'Injury Prevention', 'Strength & Power'],
      certifications: ['CSCS', 'USAW Level 2', 'FMS Certified'],
      social: {
        instagram: '#',
        facebook: '#',
        twitter: '#'
      }
    },
    {
      id: 6,
      name: 'Lisa Chen',
      role: 'Nutrition Specialist',
      image: 'https://images.pexels.com/photos/3757946/pexels-photo-3757946.jpeg',
      bio: 'Registered dietitian and nutrition coach helping clients achieve their health goals.',
      experience: '7+ years',
      specialties: ['Nutrition Planning', 'Weight Management', 'Sports Nutrition'],
      certifications: ['RD', 'CISSN', 'Precision Nutrition Level 2'],
      social: {
        instagram: '#',
        facebook: '#',
        twitter: '#'
      }
    }
  ];

  return (
    <div className="pt-16 md:pt-24">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/6456151/pexels-photo-6456151.jpeg?auto=compress&cs=tinysrgb&w=1920')" 
          }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Expert Trainers</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Meet our team of certified fitness professionals dedicated to helping you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <motion.div
                key={trainer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-80">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-xl font-semibold text-white">{trainer.name}</h3>
                    <p className="text-white/80">{trainer.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Award size={20} className="text-primary" />
                    <span className="text-muted-foreground">{trainer.experience} Experience</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{trainer.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {trainer.specialties.map((specialty, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Certifications</h4>
                    <div className="flex flex-wrap gap-2">
                      {trainer.certifications.map((cert, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4 pt-4 border-t">
                    <a 
                      href={trainer.social.instagram} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Instagram size={20} />
                    </a>
                    <a 
                      href={trainer.social.facebook} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Facebook size={20} />
                    </a>
                    <a 
                      href={trainer.social.twitter} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Fitness Journey Today</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our expert trainers are ready to help you achieve your fitness goals. Book a consultation or join a class today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-primary text-white rounded-lg font-medium"
            >
              Book a Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-background border border-input rounded-lg font-medium"
            >
              View Class Schedule
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainersPage;