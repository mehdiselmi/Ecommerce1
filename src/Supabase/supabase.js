import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rafrghuqwoqkvzsyikpz.supabase.co";
const supabaseKey = "sb_publishable_jvmc3LnFjRsG9IJeC1U38Q_NAW4Mc3P";

export const supabase = createClient(supabaseUrl, supabaseKey);
