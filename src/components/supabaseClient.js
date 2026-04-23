import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qzntwhayaajqttxtrmgv.supabase.co' 
const supabaseKey = 'sb_publishable_jfA2zq2ngnOkxVzUVXYNBA_sfnqzq9C'

export const supabase = createClient(supabaseUrl, supabaseKey)