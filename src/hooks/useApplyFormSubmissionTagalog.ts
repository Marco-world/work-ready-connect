import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { ApplyFormData } from "@/types/apply";

export const useApplyFormSubmissionTagalog = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitApplication = async (values: ApplyFormData, selectedSkills: string[]) => {
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      // Prepare submission data with correct field mapping
      const submissionData = {
        full_name: values.fullName,
        email: values.email || null,
        phone_number: values.phoneNumber,
        headline: values.headline || null,
        skills: selectedSkills.join(', '), // Legacy field for backward compatibility
        selected_skills: selectedSkills, // Array field for structured data
        bio: values.bio || null,
      };

      const { data, error } = await supabase
        .from('applicant_submissions')
        .insert(submissionData)
        .select();

      if (error) {
        throw error;
      }
      
      toast.success("Matagumpay na Naisumite ang Aplikasyon!", {
        description: "Maligayang pagdating sa CareLink household worker community. Susuriin ng aming team ang inyong aplikasyon at makikipag-ugnayan sa inyo sa loob ng 24-48 oras upang talakayin ang mga oportunidad.",
      });
      
      return { success: true };
      
    } catch (error) {
      toast.error("Hindi naisumite ang aplikasyon", {
        description: "Pakisubukan ulit o makipag-ugnayan sa aming support team kung patuloy ang problema.",
      });
      return { success: false };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitApplication, isSubmitting };
};