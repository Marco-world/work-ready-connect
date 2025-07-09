
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface CaregiverLanguage {
  id: string;
  language: string;
  proficiency_level: string;
}

export interface CaregiverExperience {
  id: string;
  country: string;
  start_date: string | null;
  end_date: string | null;
  job_details: string | null;
}

export interface CaregiverWithCareTypes {
  id: string;
  name: string;
  avatar_url: string | null;
  location: string;
  experience: string | null;
  availability: string | null;
  bio: string | null;
  portfolio_url: string | null;
  care_types: string[];
  // New fields
  age: number | null;
  nationality: string | null;
  religion: string | null;
  day_off: string | null;
  marital_status: string | null;
  employment_type: string | null;
  education_level: string | null;
  education_details: string | null;
  visa_status: string | null;
  visa_expiry: string | null;
  languages: CaregiverLanguage[];
  experiences: CaregiverExperience[];
}

export const useCaregivers = () => {
  return useQuery({
    queryKey: ['caregivers'],
    queryFn: async () => {
      const { data: caregivers, error } = await supabase
        .from('caregivers')
        .select(`
          id,
          name,
          avatar_url,
          location,
          experience,
          availability,
          bio,
          portfolio_url,
          age,
          nationality,
          religion,
          day_off,
          marital_status,
          employment_type,
          education_level,
          education_details,
          visa_status,
          visa_expiry,
          caregiver_care_services (
            care_services (
              name
            )
          ),
          caregiver_languages (
            id,
            language,
            proficiency_level
          ),
          caregiver_experiences (
            id,
            country,
            start_date,
            end_date,
            job_details
          )
        `);

      if (error) {
        throw error;
      }

      return caregivers.map((caregiver): CaregiverWithCareTypes => ({
        ...caregiver,
        care_types: caregiver.caregiver_care_services.map(
          (ccs: any) => ccs.care_services.name
        ),
        languages: caregiver.caregiver_languages || [],
        experiences: caregiver.caregiver_experiences || []
      }));
    },
  });
};

export const useCaregiver = (id: string) => {
  return useQuery({
    queryKey: ['caregiver', id],
    queryFn: async () => {
      const { data: caregiver, error } = await supabase
        .from('caregivers')
        .select(`
          id,
          name,
          avatar_url,
          location,
          experience,
          availability,
          bio,
          portfolio_url,
          age,
          nationality,
          religion,
          day_off,
          marital_status,
          employment_type,
          education_level,
          education_details,
          visa_status,
          visa_expiry,
          caregiver_care_services (
            care_services (
              name
            )
          ),
          caregiver_languages (
            id,
            language,
            proficiency_level
          ),
          caregiver_experiences (
            id,
            country,
            start_date,
            end_date,
            job_details
          )
        `)
        .eq('id', id)
        .single();

      if (error) {
        throw error;
      }

      return {
        ...caregiver,
        care_types: caregiver.caregiver_care_services.map(
          (ccs: any) => ccs.care_services.name
        ),
        languages: caregiver.caregiver_languages || [],
        experiences: caregiver.caregiver_experiences || []
      } as CaregiverWithCareTypes;
    },
  });
};
