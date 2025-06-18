
-- First, let's clear existing skills and insert the standardized skill set
DELETE FROM public.caregiver_skills;
DELETE FROM public.skills;

-- Insert the standardized skills
INSERT INTO public.skills (name, category) VALUES 
('Cleaning', 'household'),
('Washing', 'household'), 
('Ironing', 'household'),
('Baby Sitting', 'childcare'),
('New Born Care', 'childcare'),
('Decorating', 'household'),
('Housekeeping', 'household'),
('Caregiver', 'healthcare'),
('Old Person Care', 'healthcare'),
('Cooking', 'household'),
('Driving', 'transportation');

-- Update applicant_submissions table to have a proper skills structure
ALTER TABLE public.applicant_submissions 
ADD COLUMN IF NOT EXISTS selected_skills TEXT[] DEFAULT '{}';

-- Add a function to convert comma-separated skills to array format
CREATE OR REPLACE FUNCTION public.convert_skills_to_array()
RETURNS void
LANGUAGE plpgsql
AS $$
BEGIN
  -- Convert existing comma-separated skills to array format
  UPDATE public.applicant_submissions 
  SET selected_skills = string_to_array(skills, ', ')
  WHERE skills IS NOT NULL AND skills != '';
END;
$$;

-- Run the conversion
SELECT public.convert_skills_to_array();
