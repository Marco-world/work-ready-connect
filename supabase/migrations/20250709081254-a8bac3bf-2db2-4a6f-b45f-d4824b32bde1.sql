
-- Create junction table to link caregivers with care services
CREATE TABLE public.caregiver_care_services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  caregiver_id UUID NOT NULL REFERENCES public.caregivers(id) ON DELETE CASCADE,
  care_service_id UUID NOT NULL REFERENCES public.care_services(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(caregiver_id, care_service_id)
);

-- Enable RLS on the new table
ALTER TABLE public.caregiver_care_services ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Public can view caregiver care services" 
  ON public.caregiver_care_services 
  FOR SELECT 
  TO public 
  USING (true);

-- Insert sample data linking existing caregivers to care services
-- First, let's insert some sample caregivers if they don't exist
INSERT INTO public.caregivers (name, headline, location, experience, availability, avatar_url) VALUES
('Maria Santos', 'Experienced Caregiver', 'Manila, Philippines', '8+ years', 'Immediately', 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400'),
('Jennifer Lee', 'Professional Housekeeper', 'Cebu, Philippines', '5+ years', 'Within 2 weeks', 'https://images.unsplash.com/photo-1494790108755-2616c5d24f15?w=400'),
('Sarah Johnson', 'Childcare Specialist', 'Davao, Philippines', '6+ years', 'Flexible', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400')
ON CONFLICT DO NOTHING;

-- Link caregivers to care services (using care service names to find IDs)
INSERT INTO public.caregiver_care_services (caregiver_id, care_service_id)
SELECT c.id, cs.id 
FROM public.caregivers c, public.care_services cs 
WHERE c.name = 'Maria Santos' AND cs.name IN ('Nursing Care', 'Elder Care')
ON CONFLICT DO NOTHING;

INSERT INTO public.caregiver_care_services (caregiver_id, care_service_id)
SELECT c.id, cs.id 
FROM public.caregivers c, public.care_services cs 
WHERE c.name = 'Jennifer Lee' AND cs.name = 'Housekeeping'
ON CONFLICT DO NOTHING;

INSERT INTO public.caregiver_care_services (caregiver_id, care_service_id)
SELECT c.id, cs.id 
FROM public.caregivers c, public.care_services cs 
WHERE c.name = 'Sarah Johnson' AND cs.name = 'Childcare'
ON CONFLICT DO NOTHING;
