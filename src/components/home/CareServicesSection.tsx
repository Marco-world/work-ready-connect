
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Stethoscope, Baby, Home, Users2 } from "lucide-react";

interface CareService {
  id: string;
  name: string;
  description: string;
  icon_name: string;
  image_url: string | null;
  display_order: number;
}

const iconMap = {
  stethoscope: Stethoscope,
  baby: Baby,
  home: Home,
  users2: Users2,
};

const CareServicesSection = () => {
  const { data: careServices, isLoading, error } = useQuery({
    queryKey: ['care-services'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('care_services')
        .select('*')
        .order('display_order');
      
      if (error) throw error;
      return data as CareService[];
    },
  });

  if (isLoading) {
    return (
      <section className="bg-gradient-to-r from-emerald-50/50 to-emerald-100/30 py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-emerald-900">Care Services for Every Family Need</h2>
            <p className="mt-2 text-emerald-700">Loading our care services...</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center p-6 bg-background rounded-lg shadow-lg animate-pulse">
                <div className="h-12 w-12 rounded-full bg-gray-200 mx-auto mb-4"></div>
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error('Error fetching care services:', error);
    return (
      <section className="bg-gradient-to-r from-emerald-50/50 to-emerald-100/30 py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-emerald-900">Care Services for Every Family Need</h2>
            <p className="mt-2 text-emerald-700">Professional care services tailored to your family's unique situation.</p>
          </div>
          <div className="text-center text-red-600">
            <p>Unable to load care services. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-r from-emerald-50/50 to-emerald-100/30 py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-emerald-900">Care Services for Every Family Need</h2>
          <p className="mt-2 text-emerald-700">Professional care services tailored to your family's unique situation.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {careServices?.map((service) => {
            const IconComponent = iconMap[service.icon_name as keyof typeof iconMap] || Home;
            
            return (
              <div key={service.id} className="text-center p-6 bg-background rounded-lg shadow-lg hover-scale relative overflow-hidden group">
                {service.image_url && (
                  <div 
                    className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                    style={{
                      backgroundImage: `url('${service.image_url}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                )}
                <div className="relative z-10">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto mb-4">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg">{service.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CareServicesSection;
