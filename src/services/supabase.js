// src/services/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cgrgoxrgxcyldadnrcrv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNncmdveHJneGN5bGRhZG5yY3J2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwNzU3NDgsImV4cCI6MjA2NzY1MTc0OH0.4X9f0uAFKQlrBnb4WQhl-FT7Wmrwbxfly-6M2NFdzvo'
export const supabase = createClient(supabaseUrl, supabaseKey)
