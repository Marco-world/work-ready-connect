
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Users, Heart } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section className="bg-gradient-to-b from-emerald-50/30 to-background py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-900">
            How CareLink Works
          </h2>
          <p className="text-emerald-700 text-lg max-w-2xl mx-auto">
            Finding the perfect caregiver for your family is simple with our streamlined process
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center group">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
              <MessageSquare className="h-8 w-8" />
            </div>
            <div className="bg-emerald-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
              Step 1
            </div>
            <h3 className="text-xl font-semibold mb-3 text-emerald-900">Tell Us Your Needs</h3>
            <p className="text-emerald-700">
              Share your specific care requirements, schedule preferences, and family situation with us
            </p>
          </div>
          
          <div className="text-center group">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
              <Users className="h-8 w-8" />
            </div>
            <div className="bg-emerald-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
              Step 2
            </div>
            <h3 className="text-xl font-semibold mb-3 text-emerald-900">Get Matched</h3>
            <p className="text-emerald-700">
              Our team carefully matches you with pre-screened, qualified caregivers who fit your needs
            </p>
          </div>
          
          <div className="text-center group">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
              <Heart className="h-8 w-8" />
            </div>
            <div className="bg-emerald-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
              Step 3
            </div>
            <h3 className="text-xl font-semibold mb-3 text-emerald-900">Start Caring</h3>
            <p className="text-emerald-700">
              Begin your care journey with confidence, knowing you have ongoing support from our team
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild className="hover-scale bg-emerald-600 hover:bg-emerald-700">
              <Link to="/talent">
                Find Your Caregiver <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="hover-scale border-emerald-600 text-emerald-600 hover:bg-emerald-50">
              <Link to="/apply">
                Join Our Team <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
