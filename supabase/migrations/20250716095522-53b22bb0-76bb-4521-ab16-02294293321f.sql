-- Add language column to applicant_submissions table
ALTER TABLE public.applicant_submissions 
ADD COLUMN language TEXT;

-- Update existing NOT NULL constraints to allow NULL for optional fields
ALTER TABLE public.applicant_submissions 
ALTER COLUMN email DROP NOT NULL;

ALTER TABLE public.applicant_submissions 
ALTER COLUMN headline DROP NOT NULL;

ALTER TABLE public.applicant_submissions 
ALTER COLUMN bio DROP NOT NULL;

ALTER TABLE public.applicant_submissions 
ALTER COLUMN skills DROP NOT NULL;