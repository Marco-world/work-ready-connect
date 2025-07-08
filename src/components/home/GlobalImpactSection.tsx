
import { useState, useEffect } from "react";
import { Globe, Users, Award } from "lucide-react";

const GlobalImpactSection = () => {
  const [counters, setCounters] = useState({ countries: 0, languages: 0, professionals: 0 });

  useEffect(() => {
    const animateCounters = () => {
      const targets = { countries: 15, languages: 25, professionals: 1000 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounters({
          countries: Math.floor(targets.countries * progress),
          languages: Math.floor(targets.languages * progress),
          professionals: Math.floor(targets.professionals * progress),
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setCounters(targets);
        }
      }, stepDuration);

      return interval;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('global-impact');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="global-impact" className="py-16 bg-gradient-to-r from-coral-400 via-orange-400 to-amber-400 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            Global Impact & Trust
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Building a worldwide community of care, connecting families and professionals across continents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="group hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-br from-coral-500 to-orange-500 rounded-full shadow-lg">
                  <Globe className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-coral-600 to-orange-600 bg-clip-text text-transparent mb-2">
                {counters.countries}+
              </div>
              <p className="text-lg text-gray-700 font-medium">Countries Served</p>
              <p className="text-sm text-gray-500 mt-2">Spanning across continents</p>
            </div>
          </div>

          <div className="group hover:transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-2">
                {counters.languages}+
              </div>
              <p className="text-lg text-gray-700 font-medium">Languages Supported</p>
              <p className="text-sm text-gray-500 mt-2">Breaking communication barriers</p>
            </div>
          </div>

          <div className="group hover:transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full shadow-lg">
                  <Award className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-2">
                {counters.professionals}+
              </div>
              <p className="text-lg text-gray-700 font-medium">Trusted Professionals</p>
              <p className="text-sm text-gray-500 mt-2">Verified & experienced</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalImpactSection;
