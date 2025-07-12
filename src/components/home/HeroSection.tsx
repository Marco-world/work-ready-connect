
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Briefcase } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <section className="relative py-20 md:py-32 text-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-5"></div>
        
        {/* Content */}
        <div className="container relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg mb-6">
              Connecting Trusted Professionals and Loving Families
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-white/95 leading-relaxed drop-shadow mb-12">
              Find verified, compassionate household workers for your family, or build a rewarding career 
              in caregiving with premium families who value your expertise.
            </p>
            
            {/* Glassmorphism CTAs */}
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {/* For Families */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-xl blur-sm group-hover:blur-none transition-all duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Heart className="h-8 w-8 text-emerald-400" />
                    <h3 className="text-xl font-bold text-white">For Families</h3>
                  </div>
                  <Button size="lg" asChild className="w-full bg-emerald-600/80 hover:bg-emerald-600 text-white border-0 backdrop-blur-sm">
                    <Link to="/talent">
                      Find Care for Your Family
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* For Professionals */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/30 rounded-xl blur-sm group-hover:blur-none transition-all duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Briefcase className="h-8 w-8 text-blue-400" />
                    <h3 className="text-xl font-bold text-white">For Professionals</h3>
                  </div>
                  <Button size="lg" asChild className="w-full bg-primary/80 hover:bg-primary text-white border-0 backdrop-blur-sm">
                    <Link to="/apply">
                      Start Your Career Journey
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
