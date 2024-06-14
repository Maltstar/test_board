import { createClient } from '@supabase/supabase-js'

//const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
//const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const supabaseUrl = 'https://xlyocekrqfonxwtbeyys.supabase.co/'
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhseW9jZWtycWZvbnh3dGJleXlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc3OTY5MTEsImV4cCI6MjAzMzM3MjkxMX0.Jn94kNIne8Hla8AuczHi8ORV37XofnXcJgNJps6TqZA'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase
