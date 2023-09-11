
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xfphseclxxaelasqubwg.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmcGhzZWNseHhhZWxhc3F1YndnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI4MDEwODcsImV4cCI6MjAwODM3NzA4N30.Dl91AABUjIjaeN45xFhSnmqg0xcdF98KaV_ik6VhyAU";
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase;