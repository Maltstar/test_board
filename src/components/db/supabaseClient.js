import { createClient } from '@supabase/supabase-js'

//const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
//const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_KEY
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_URL
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase
