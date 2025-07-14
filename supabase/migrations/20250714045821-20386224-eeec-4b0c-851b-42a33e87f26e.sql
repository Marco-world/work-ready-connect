
-- Add phone_number column to applicant_submissions table
ALTER TABLE public.applicant_submissions 
ADD COLUMN phone_number TEXT;

-- Update the updated_at timestamp trigger if it exists
-- This ensures the updated_at field works properly with the new column
