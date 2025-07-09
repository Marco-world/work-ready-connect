
-- Add missing fields to caregivers table
ALTER TABLE public.caregivers 
ADD COLUMN age INTEGER,
ADD COLUMN nationality TEXT,
ADD COLUMN religion TEXT,
ADD COLUMN day_off TEXT,
ADD COLUMN marital_status TEXT,
ADD COLUMN employment_type TEXT,
ADD COLUMN education_level TEXT,
ADD COLUMN education_details TEXT,
ADD COLUMN visa_status TEXT,
ADD COLUMN visa_expiry DATE;

-- Create caregiver_languages table
CREATE TABLE public.caregiver_languages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  caregiver_id UUID NOT NULL REFERENCES public.caregivers(id) ON DELETE CASCADE,
  language TEXT NOT NULL,
  proficiency_level TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create caregiver_experiences table  
CREATE TABLE public.caregiver_experiences (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  caregiver_id UUID NOT NULL REFERENCES public.caregivers(id) ON DELETE CASCADE,
  country TEXT NOT NULL,
  start_date DATE,
  end_date DATE,
  job_details TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on new tables
ALTER TABLE public.caregiver_languages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.caregiver_experiences ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for public read access
CREATE POLICY "Public can view caregiver languages" 
  ON public.caregiver_languages 
  FOR SELECT 
  USING (true);

CREATE POLICY "Public can view caregiver experiences" 
  ON public.caregiver_experiences 
  FOR SELECT 
  USING (true);

-- Create profile-images storage bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('profile-images', 'profile-images', true);

-- Create storage policies for profile images
CREATE POLICY "Public can view profile images" 
  ON storage.objects 
  FOR SELECT 
  USING (bucket_id = 'profile-images');

CREATE POLICY "Authenticated users can upload profile images" 
  ON storage.objects 
  FOR INSERT 
  TO authenticated
  WITH CHECK (bucket_id = 'profile-images');

CREATE POLICY "Authenticated users can update profile images" 
  ON storage.objects 
  FOR UPDATE 
  TO authenticated
  USING (bucket_id = 'profile-images');

CREATE POLICY "Authenticated users can delete profile images" 
  ON storage.objects 
  FOR DELETE 
  TO authenticated
  USING (bucket_id = 'profile-images');

-- Update existing caregivers with sample data
UPDATE public.caregivers 
SET 
  age = 28,
  nationality = 'Filipino',  
  religion = 'Christian',
  day_off = 'Friday',
  marital_status = 'Single',
  employment_type = 'Full-time',
  education_level = 'Bachelor''s Degree in Nursing',
  visa_status = 'Valid Work Permit',
  visa_expiry = '2025-12-31'
WHERE name = 'Maria Rodriguez';

-- Insert sample language data
INSERT INTO public.caregiver_languages (caregiver_id, language, proficiency_level)
SELECT id, 'English', 'Fluent' FROM public.caregivers WHERE name = 'Maria Rodriguez'
UNION ALL
SELECT id, 'Arabic', 'Basic' FROM public.caregivers WHERE name = 'Maria Rodriguez';

-- Insert sample experience data
INSERT INTO public.caregiver_experiences (caregiver_id, country, start_date, end_date, job_details)
SELECT id, 'UAE', '2020-01-01', '2024-01-01', 'Senior caregiver for elderly patients with specialized medical needs. Provided 24/7 care including medication management and physical therapy support.'
FROM public.caregivers WHERE name = 'Maria Rodriguez';
