
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Briefcase } from "lucide-react";

const BottomCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
            Two Paths, One Community of Care
          </h2>
          <p className="text-white/90 text-xl mb-10 leading-relaxed">
            Whether you're seeking care or providing it, CareLink connects hearts and homes with purpose. 
            Join our trusted community today and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button 
              size="lg" 
              asChild 
              className="group hover:transform hover:scale-105 transition-all duration-300 bg-white/95 hover:bg-white text-emerald-600 hover:text-emerald-700 shadow-2xl border-0 px-8 py-4 text-lg font-semibold"
            >
              <Link to="/talent">
                <Heart className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                Find Family Care
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="group hover:transform hover:scale-105 transition-all duration-300 border-2 border-white/50 text-white hover:bg-white/10 bg-white/5 backdrop-blur-md shadow-2xl px-8 py-4 text-lg font-semibold"
            >
              <Link to="/apply">
                <Briefcase className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                Build Your Career
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomCTASection;
