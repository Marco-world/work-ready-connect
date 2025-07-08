import { createClient } from "@supabase/supabase-js";

export interface Candidate {
  id: number;
  name: string;
  avatarUrl: string;
  headline: string;
  skills: string[];
  location: string;
  experience?: string;
  availability?: string;
  languages?: string[];
}

// Instanciez votre client Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
export const supabase = createClient(supabaseUrl, supabaseKey);

// Fonction pour récupérer les candidats depuis la table "Caregivers"
export async function fetchCandidates(): Promise<Candidate[]> {
  const { data, error } = await supabase
    .from("Caregivers")
    .select("*");
  if (error) throw error;
  // Adaptez ici si vos champs sont différents ou à transformer (ex: skills/langages en array)
  return data as Candidate[];
}
