
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Briefcase } from "lucide-react";

const BottomCTASection = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-emerald-600 py-20">
      <div className="container text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Two Paths, One Community of Care
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Whether you're seeking care or providing it, CareLink connects hearts and homes with purpose. 
            Join our trusted community today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild className="hover-scale bg-emerald-600 hover:bg-emerald-700 text-white border-0">
              <Link to="/talent">
                <Heart className="ml-2 h-5 w-5" />
                Find Family Care
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="hover-scale border-white/30 text-white hover:bg-white/10 bg-white/5">
              <Link to="/apply">
                <Briefcase className="ml-2 h-5 w-5" />
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
