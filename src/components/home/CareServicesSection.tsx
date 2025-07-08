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
      <section className="py-16 bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-500 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">Care Services for Every Family Need</h2>
            <p className="text-xl text-white/90 leading-relaxed">Loading our care services...</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl animate-pulse">
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
      <section className="py-16 bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-500 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">Care Services for Every Family Need</h2>
            <p className="text-xl text-white/90 leading-relaxed">Professional care services tailored to your family's unique situation.</p>
          </div>
          <div className="text-center text-red-200 bg-white/20 backdrop-blur-md rounded-2xl p-8">
            <p className="text-lg">Unable to load care services. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-500 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            Care Services for Every Family Need
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Professional care services tailored to your family's unique situation and specific requirements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {careServices?.map((service, index) => {
            const IconComponent = iconMap[service.icon_name as keyof typeof iconMap] || Home;
            const gradients = [
              'from-rose-500 to-pink-500',
              'from-violet-500 to-purple-500',
              'from-emerald-500 to-green-500',
              'from-orange-500 to-red-500'
            ];
            const gradient = gradients[index % gradients.length];
            
            return (
              <div key={service.id} className="group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 text-center shadow-2xl border border-white/20 h-full relative overflow-hidden">
                  {service.image_url && (
                    <div 
                      className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                      style={{
                        backgroundImage: `url('${service.image_url}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                  )}
                  <div className="relative z-10">
                    <div className="flex justify-center mb-4">
                      <div className={`p-4 bg-gradient-to-br ${gradient} rounded-full shadow-lg`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{service.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
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
