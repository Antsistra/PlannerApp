import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://opblndbvaohmbbdzlxhf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wYmxuZGJ2YW9obWJiZHpseGhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0OTYzMzksImV4cCI6MjA1MDA3MjMzOX0.2WWjNg6CiQtz3BaswVhEVSXomRvw-ALk13r6cHEDNdg";
export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
