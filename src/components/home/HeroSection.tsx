
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Briefcase } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <section className="relative py-20 md:py-32 text-center overflow-hidden">
        {/* Enhanced Background with Vibrant Gradient */}
        <div 
          className="absolute inset-0 z-0 bg-gradient-to-br from-violet-600 via-blue-600 to-emerald-500"
        />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-coral-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        
        {/* Content */}
        <div className="container relative z-20">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-2xl mb-6">
              Connecting Hearts, Homes & Healthcare
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-white/95 leading-relaxed drop-shadow mb-12">
              Whether you need compassionate care for your family or want to build a rewarding career in caregiving, 
              CareLink brings together trusted professionals and loving families.
            </p>
            
            {/* Enhanced two distinct user paths */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* For Families - Enhanced with glassmorphism */}
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 text-left shadow-2xl border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">For Families</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Find verified, compassionate Household workers who will treat your loved ones like family. 
                  From childcare to senior support, we have trusted professionals ready to help.
                </p>
                <Button size="lg" asChild className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white shadow-lg">
                  <Link to="/talent">
                    <Heart className="mr-2 h-5 w-5" />
                    Find Care for Your Family
                  </Link>
                </Button>
              </div>
              
              {/* For Professionals - Enhanced with glassmorphism */}
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 text-left shadow-2xl border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">For Household workers</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Join our professional network and build a meaningful career in caregiving. 
                  Work with premium families who value your expertise and dedication.
                </p>
                <Button size="lg" asChild className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg">
                  <Link to="/apply">
                    <Briefcase className="mr-2 h-5 w-5" />
                    Start Your Career Journey
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
