import { motion } from 'framer-motion';
import { Users, Award, Clock, MapPin } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-16 md:pt-24">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1920')" 
          }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Discover the story behind Biceps Solutions and our commitment to helping you achieve your fitness goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Founded in 2020, Biceps Solutions was born from a passion for fitness and a desire to create a welcoming, inclusive environment where people of all fitness levels could thrive.
                </p>
                <p className="text-muted-foreground">
                  What started as a small local gym has grown into a comprehensive fitness center, offering state-of-the-art equipment, expert-led classes, and personalized training programs.
                </p>
                <p className="text-muted-foreground">
                  Our mission is simple: to help our members achieve their fitness goals while fostering a supportive community that encourages and motivates each other.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Gym Equipment" 
                className="rounded-lg"
              />
              <img 
                src="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Training Session" 
                className="rounded-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Happy Members</div>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Weekly Classes</div>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground">Expert Trainers</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-background p-8 rounded-lg shadow-md"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Trainers</h3>
              <p className="text-muted-foreground">
                Our certified trainers bring years of experience and specialized knowledge to help you achieve your fitness goals safely and effectively.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-background p-8 rounded-lg shadow-md"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Award className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Modern Equipment</h3>
              <p className="text-muted-foreground">
                State-of-the-art facilities and equipment to provide you with the best possible workout experience.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-background p-8 rounded-lg shadow-md"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Clock className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Flexible Hours</h3>
              <p className="text-muted-foreground">
                Open early until late with a schedule that fits your lifestyle, making it easy to maintain your fitness routine.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Visit Us</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground">123 Fitness Ave, Workout City, WC 12345</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 6:00 AM - 10:00 PM</p>
                    <p className="text-muted-foreground">Saturday - Sunday: 8:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/7031705/pexels-photo-7031705.jpeg?auto=compress&cs=tinysrgb&w=1920" 
                alt="Gym Interior" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;