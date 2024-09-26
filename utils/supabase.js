// supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ddztsjkbnjupauihjnqb.supabase.co'; 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkenRzamtibmp1cGF1aWhqbnFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjczNjI4NTUsImV4cCI6MjA0MjkzODg1NX0.PFj01Zpn2fFaWhxfTpWlET5TTNz09iFFxAA5RRU7TNE'; // Replace with your Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
