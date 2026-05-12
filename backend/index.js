import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Example: insert lead
export async function saveLead(email, company, role, teamSize) {
  const { data, error } = await supabase
    .from("leads")
    .insert([{ email, company, role, team_size: teamSize }]);

  if (error) {
    console.error("Error saving lead:", error);
  } else {
    console.log("Lead saved:", data);
  }
}
