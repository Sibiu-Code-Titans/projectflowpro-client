import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mvktmvogrbtjvnvufvdl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12a3Rtdm9ncmJ0anZudnVmdmRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg0MjA5MTMsImV4cCI6MjAxMzk5NjkxM30.1BQknIr-umcYLmUF-fRrUwPHS8ffEnM7h5iidyx1bA4";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
