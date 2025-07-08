
import { MessageSquare, Users, Heart } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-16 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 right-16 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            How CareLink Works
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Finding the perfect Household worker for your family is simple with our streamlined process
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line - Enhanced for mobile */}
          <div className="absolute left-8 top-20 bottom-20 w-1 bg-gradient-to-b from-white/30 to-white/60 md:hidden rounded-full"></div>
          
          {/* Desktop connecting elements */}
          <div className="hidden md:flex absolute top-32 left-0 right-0 items-center justify-center">
            <div className="flex items-center justify-between w-2/3">
              <div className="w-24 h-1 bg-gradient-to-r from-white/30 to-white/60 rounded-full"></div>
              <div className="w-24 h-1 bg-gradient-to-r from-white/30 to-white/60 rounded-full"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
            <div className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 text-center shadow-2xl border border-white/20">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full shadow-lg">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-bold px-4 py-2 rounded-full inline-block mb-4 shadow-lg">
                  Step 1
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Tell Us Your Needs
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Share your specific care requirements, schedule preferences, and family situation with our expert team
                </p>
              </div>
            </div>
            
            <div className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 text-center shadow-2xl border border-white/20">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-lg">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold px-4 py-2 rounded-full inline-block mb-4 shadow-lg">
                  Step 2
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Get Matched
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our expert team carefully matches you with pre-screened, qualified Household workers who perfectly fit your needs
                </p>
              </div>
            </div>

            <div className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 text-center shadow-2xl border border-white/20">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full shadow-lg">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-sm font-bold px-4 py-2 rounded-full inline-block mb-4 shadow-lg">
                  Step 3
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  Start Caring
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Begin your care journey with complete confidence, knowing you have ongoing support from our dedicated team
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
