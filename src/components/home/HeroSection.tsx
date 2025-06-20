
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Briefcase } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 text-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
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
            Connecting Hearts, Homes & Healthcare
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-white/95 leading-relaxed drop-shadow mb-12">
            Whether you need compassionate care for your family or want to build a rewarding career in caregiving, 
            CareLink brings together trusted professionals and loving families.
          </p>
          
          {/* Two distinct user paths */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* For Families */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 text-left">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="h-8 w-8 text-emerald-600" />
                <h3 className="text-2xl font-bold text-emerald-900">For Families</h3>
              </div>
              <p className="text-emerald-800 mb-6">
                Find verified, compassionate caregivers who will treat your loved ones like family. 
                From childcare to senior support, we have trusted professionals ready to help.
              </p>
              <Button size="lg" asChild className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                <Link to="/talent">
                  <Heart className="mr-2 h-5 w-5" />
                  Find Care for Your Family
                </Link>
              </Button>
            </div>
            
            {/* For Professionals */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 text-left">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold text-primary">For Caregivers</h3>
              </div>
              <p className="text-primary-foreground/80 mb-6">
                Join our professional network and build a meaningful career in caregiving. 
                Work with premium families who value your expertise and dedication.
              </p>
              <Button size="lg" asChild className="w-full bg-primary hover:bg-primary/90">
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
  );
};

export default HeroSection;
