
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

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
          caregiver_care_services (
            care_services (
              name
            )
          )
        `);

      if (error) {
        throw error;
      }

      return caregivers.map((caregiver): CaregiverWithCareTypes => ({
        ...caregiver,
        care_types: caregiver.caregiver_care_services.map(
          (ccs: any) => ccs.care_services.name
        )
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
          caregiver_care_services (
            care_services (
              name
            )
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
        )
      } as CaregiverWithCareTypes;
    },
  });
};
