import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

// We need to get these from environment variables
// For now we'll use temporary dummy values
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-supabase-url.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-supabase-anon-key';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);