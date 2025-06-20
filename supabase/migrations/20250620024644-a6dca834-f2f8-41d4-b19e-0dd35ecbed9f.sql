
-- Create care_services table to store service information and images
CREATE TABLE public.care_services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  icon_name TEXT NOT NULL,
  image_url TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS (though we'll make it publicly readable for now)
ALTER TABLE public.care_services ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access to care services" 
  ON public.care_services 
  FOR SELECT 
  TO public 
  USING (true);

-- Insert initial care services data
INSERT INTO public.care_services (name, description, icon_name, image_url, display_order) VALUES
('Nursing Care', 'Professional medical care at home', 'stethoscope', 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', 1),
('Childcare', 'Loving care for your little ones', 'baby', 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', 2),
('Housekeeping', 'Professional home cleaning services', 'home', 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', 3),
('Elder Care', 'Compassionate senior assistance', 'users2', 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', 4);

-- Enable realtime for the table
ALTER TABLE public.care_services REPLICA IDENTITY FULL;
