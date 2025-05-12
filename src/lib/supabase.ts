import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

// We need to get these from environment variables
// For now we'll use temporary dummy values
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);