
import { Shield, Heart, Users } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            Why Families Choose CareLink
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Discover the CareLink difference: safety, compassion, and the perfect match for your home
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 text-center shadow-2xl border border-white/20 h-full">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-4">
                Verified & Trusted
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Every Household worker is background-checked and reference-verified for your peace of mind. 
                We ensure only the most trustworthy professionals join our network.
              </p>
            </div>
          </div>

          <div className="group hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 text-center shadow-2xl border border-white/20 h-full">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full shadow-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
                Compassionate Care
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We select Household workers not just for their skills, but for their genuine empathy and kindness. 
                Your family deserves care that comes from the heart.
              </p>
            </div>
          </div>

          <div className="group hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 text-center shadow-2xl border border-white/20 h-full">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                Perfect Matches
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We match you with Household workers based on your unique needs, preferences, and family dynamics. 
                Find the perfect fit for your home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
