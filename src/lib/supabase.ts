import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

// We need to get these from environment variables
// For now we'll use temporary dummy values
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ieogbiucxmlfeedamgij.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imllb2diaXVjeG1sZmVlZGFtZ2lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY5NzgxNDIsImV4cCI6MjA2MjU1NDE0Mn0.FPvqvvOYYXT-5HJOrpBZcJRN6gHIshKIQNkOIQJ3lfs';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);