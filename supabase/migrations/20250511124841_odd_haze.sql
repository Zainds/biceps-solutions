/*
  # Initial schema setup for Biceps Solutions fitness center

  1. New Tables
    - `profiles` - User profile information
    - `memberships` - Available membership plans
    - `trainers` - Fitness trainers information
    - `classes` - Fitness classes offered
    - `bookings` - Class bookings by users
  
  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
    - Ensure data isolation and protection
*/

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create memberships table
CREATE TABLE IF NOT EXISTS memberships (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  price NUMERIC NOT NULL,
  features TEXT[] NOT NULL,
  duration TEXT NOT NULL
);

-- Create trainers table
CREATE TABLE IF NOT EXISTS trainers (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  bio TEXT NOT NULL,
  image_url TEXT NOT NULL,
  specialties TEXT[] NOT NULL,
  experience_years INTEGER NOT NULL
);

-- Create classes table
CREATE TABLE IF NOT EXISTS classes (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  trainer_id INTEGER REFERENCES trainers(id),
  duration INTEGER NOT NULL,
  max_participants INTEGER NOT NULL,
  level TEXT NOT NULL
);

-- Create profiles table linked to auth.users
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  full_name TEXT NOT NULL,
  avatar_url TEXT,
  phone_number TEXT,
  membership_id INTEGER REFERENCES memberships(id)
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  user_id UUID REFERENCES profiles(id),
  class_id INTEGER REFERENCES classes(id),
  booking_date TIMESTAMPTZ NOT NULL,
  status TEXT NOT NULL DEFAULT 'confirmed'
);

-- Set up Row Level Security (RLS)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE memberships ENABLE ROW LEVEL SECURITY;
ALTER TABLE trainers ENABLE ROW LEVEL SECURITY;
ALTER TABLE classes ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view their own profile"
  ON profiles
  FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON profiles
  FOR UPDATE
  USING (auth.uid() = id);

-- Memberships policies
CREATE POLICY "Memberships are viewable by everyone"
  ON memberships
  FOR SELECT
  TO authenticated
  USING (true);

-- Trainers policies
CREATE POLICY "Trainers are viewable by everyone"
  ON trainers
  FOR SELECT
  TO authenticated
  USING (true);

-- Classes policies
CREATE POLICY "Classes are viewable by everyone"
  ON classes
  FOR SELECT
  TO authenticated
  USING (true);

-- Bookings policies
CREATE POLICY "Users can view their own bookings"
  ON bookings
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own bookings"
  ON bookings
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own bookings"
  ON bookings
  FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own bookings"
  ON bookings
  FOR DELETE
  USING (auth.uid() = user_id);

-- Create function to create profile after signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url)
  VALUES (new.id, new.raw_user_meta_data->>'full_name', NULL);
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger the function every time a user is created
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Sample data for memberships
INSERT INTO memberships (name, description, price, features, duration)
VALUES 
  ('Basic', 'Access to gym equipment and basic amenities', 29.99, ARRAY['Gym access', 'Locker rooms', 'Free parking'], 'Monthly'),
  ('Premium', 'Full access to all facilities and group classes', 49.99, ARRAY['All Basic features', 'Group classes', 'Sauna & spa', 'Personal trainer consultation (1/month)'], 'Monthly'),
  ('Elite', 'All-inclusive VIP experience', 89.99, ARRAY['All Premium features', 'Unlimited personal training', 'Nutrition counseling', 'Priority booking', 'Guest passes (2/month)'], 'Monthly');

-- Sample data for trainers
INSERT INTO trainers (name, bio, image_url, specialties, experience_years)
VALUES 
  ('Alex Johnson', 'NASM certified trainer specializing in strength training and HIIT workouts.', 'https://images.pexels.com/photos/6456300/pexels-photo-6456300.jpeg', ARRAY['Strength Training', 'HIIT', 'Weight Loss'], 8),
  ('Sarah Williams', 'Former Olympic athlete with expertise in sports conditioning and rehabilitation.', 'https://images.pexels.com/photos/5327533/pexels-photo-5327533.jpeg', ARRAY['Sports Conditioning', 'Rehabilitation', 'Functional Training'], 12),
  ('Marcus Chen', 'Yoga instructor and mobility specialist focusing on flexibility and mind-body connection.', 'https://images.pexels.com/photos/4058411/pexels-photo-4058411.jpeg', ARRAY['Yoga', 'Mobility', 'Meditation'], 6);

-- Sample data for classes
INSERT INTO classes (name, description, image_url, trainer_id, duration, max_participants, level)
VALUES 
  ('Power HIIT', 'High-intensity interval training designed to burn maximum calories and build endurance.', 'https://images.pexels.com/photos/7530055/pexels-photo-7530055.jpeg', 1, 45, 15, 'Intermediate'),
  ('Yoga Flow', 'Gentle yet effective yoga sequence focusing on flexibility, balance, and mindfulness.', 'https://images.pexels.com/photos/4056478/pexels-photo-4056478.jpeg', 3, 60, 20, 'All Levels'),
  ('Strength Foundations', 'Learn proper lifting techniques and build full-body strength with compound movements.', 'https://images.pexels.com/photos/4164512/pexels-photo-4164512.jpeg', 1, 50, 12, 'Beginner'),
  ('Sports Conditioning', 'Functional training to improve athletic performance for sports enthusiasts.', 'https://images.pexels.com/photos/6456151/pexels-photo-6456151.jpeg', 2, 55, 10, 'Advanced');