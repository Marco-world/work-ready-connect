
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { ApplyFormData } from "@/types/apply";

export const useApplyFormSubmission = () => {
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
      
      toast.success("Application Submitted Successfully!", {
        description: "Welcome to the CareLink household worker community. Our team will review your application and contact you within 24-48 hours to discuss opportunities.",
      });
      
      return { success: true };
      
    } catch (error) {
      toast.error("Application submission failed", {
        description: "Please try again or contact our support team if the problem persists.",
      });
      return { success: false };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitApplication, isSubmitting };
};
