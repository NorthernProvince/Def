import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database helper functions
export const nominatеSubmission = async (data) => {
  const { data: result, error } = await supabase
    .from('nominations')
    .insert([data])
    .select()
  
  if (error) throw error
  return result
}

export const submitContact = async (data) => {
  const { data: result, error } = await supabase
    .from('contacts')
    .insert([data])
    .select()
  
  if (error) throw error
  return result
}

export const subscribeNewsletter = async (email) => {
  const { data: result, error } = await supabase
    .from('newsletter')
    .insert([{ email }])
    .select()
  
  if (error) throw error
  return result
}
